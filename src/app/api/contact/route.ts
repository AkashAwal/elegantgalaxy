import { NextRequest, NextResponse } from "next/server";
import { resolveMx } from "dns/promises";
import type { MxRecord } from "dns";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const CHAT_ID   = process.env.TELEGRAM_CHAT_ID!;

// ── Disposable / throwaway email domains ──────────────────────────────────────
const DISPOSABLE = new Set([
  "mailinator.com","tempmail.com","guerrillamail.com","10minutemail.com",
  "throwaway.email","yopmail.com","trashmail.com","fakeinbox.com",
  "sharklasers.com","grr.la","spam4.me","maildrop.cc","mohmal.com",
  "tempr.email","discard.email","dispostable.com","mailnull.com",
  "trashmail.at","trashmail.io","trashmail.me","trashmail.net",
  "guerrillamail.info","guerrillamail.biz","guerrillamail.de",
  "guerrillamail.net","guerrillamail.org","guerrillamailblock.com",
  "getairmail.com","filzmail.com","meltmail.com","airmail.cc",
  "spamgourmet.com","trashmail.org","spamgourmet.org","mailexpire.com",
]);

// ── Gibberish detector ────────────────────────────────────────────────────────
// Checks vowel ratio and repeated-char runs. Deliberately lenient for emails.
function isGibberish(str: string, strict = false): boolean {
  const letters = str.toLowerCase().replace(/[^a-z]/g, "");
  if (letters.length < 2) return true;
  // 4+ consecutive same character  (e.g. "aaaa", "qqqq")
  if (/(.)\1{3,}/.test(letters)) return true;
  // Vowel ratio — must be at least 12% (strict: 15%) of all letters
  const vowels = (letters.match(/[aeiou]/g) || []).length;
  const threshold = strict ? 0.15 : 0.12;
  if (vowels / letters.length < threshold) return true;
  return false;
}

// ── MX lookup with 4-second timeout ──────────────────────────────────────────
async function hasMX(domain: string): Promise<boolean> {
  try {
    const race = await Promise.race([
      resolveMx(domain),
      new Promise<never>((_, rej) =>
        setTimeout(() => rej(new Error("timeout")), 4000)
      ),
    ]);
    return (race as MxRecord[]).length > 0;
  } catch {
    // If DNS is unreachable or times out, allow through (don't penalise good users)
    return true;
  }
}

// ── Route handler ─────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const { name, email, countryCode, phone, location, message } =
      (await req.json()) as Record<string, string>;

    // ── Name ──────────────────────────────────────────────────────────────────
    const cleanName = (name ?? "").trim();
    if (cleanName.length < 2 || cleanName.length > 80)
      return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
    if (!/^[\p{L}\s'\-]+$/u.test(cleanName))
      return NextResponse.json({ error: "Name can only contain letters, spaces, hyphens, and apostrophes." }, { status: 400 });
    if (isGibberish(cleanName, true))
      return NextResponse.json({ error: "Please enter your real name." }, { status: 400 });

    // ── Email ─────────────────────────────────────────────────────────────────
    const cleanEmail = (email ?? "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanEmail))
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });

    const atIdx     = cleanEmail.lastIndexOf("@");
    const localPart = cleanEmail.slice(0, atIdx);
    const domain    = cleanEmail.slice(atIdx + 1);

    if (DISPOSABLE.has(domain))
      return NextResponse.json({ error: "Disposable email addresses are not accepted." }, { status: 400 });

    if (isGibberish(localPart.replace(/[\d._\-+]/g, "")))
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });

    const validMX = await hasMX(domain);
    if (!validMX)
      return NextResponse.json(
        { error: "The email domain doesn't seem to exist. Please double-check your email." },
        { status: 400 }
      );

    // ── Phone ─────────────────────────────────────────────────────────────────
    const digits = (phone ?? "").replace(/\D/g, "");
    if (digits.length !== 10)
      return NextResponse.json({ error: "Phone number must be exactly 10 digits." }, { status: 400 });
    if (/^(\d)\1{9}$/.test(digits))
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });

    // ── Location ──────────────────────────────────────────────────────────────
    const cleanLocation = (location ?? "").trim();
    if (cleanLocation.length < 2)
      return NextResponse.json({ error: "Please enter your location." }, { status: 400 });

    // ── Message ───────────────────────────────────────────────────────────────
    const cleanMessage = (message ?? "").trim();
    if (cleanMessage.length < 5)
      return NextResponse.json({ error: "Please enter a message." }, { status: 400 });

    // ── Send to Telegram ──────────────────────────────────────────────────────
    const cc = (countryCode ?? "+91").trim();
    const text = [
      `🛎️ *New Enquiry — Elegant Galaxy*`,
      ``,
      `👤 *Name:* ${cleanName}`,
      `📧 *Email:* ${cleanEmail}`,
      `📱 *Phone:* ${cc} ${digits}`,
      `📍 *Location:* ${cleanLocation}`,
      ``,
      `💬 *Message:*`,
      cleanMessage,
    ].join("\n");

    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: "Markdown" }),
      }
    );

    if (!tgRes.ok) {
      console.error("Telegram error:", await tgRes.text());
      return NextResponse.json(
        { error: "Failed to send. Please try again in a moment." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
