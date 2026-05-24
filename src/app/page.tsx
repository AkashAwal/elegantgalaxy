export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center bg-[#f5f5f7]">
      <h1
        className="font-semibold text-[#1d1d1f]"
        style={{ fontSize: 48, lineHeight: 1.0835, letterSpacing: "-0.003em" }}
      >
        Elegant Galaxy
      </h1>
      <p
        className="max-w-xl text-[#6e6e73]"
        style={{ fontSize: 21, lineHeight: 1.381, letterSpacing: "0.011em" }}
      >
        Premium home appliances — Smart TVs, Washing Machines, Air Coolers &amp;
        Infrared Cooktops.
      </p>
      <span className="inline-block h-1 w-16 rounded-full bg-brand-gold" />
      <p
        className="text-[#86868b]"
        style={{ fontSize: 14, lineHeight: 1.4286, letterSpacing: "-0.016em" }}
      >
        Site coming soon.
      </p>
    </main>
  );
}
