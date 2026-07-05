// Server-only — reads secrets (GOOGLE_PLACES_API_KEY) and must never be
// imported from a "use client" component.
import "server-only";

export interface ReviewItem {
  quote:  string;
  name:   string;
  rating: number;
}

export interface GoogleReviewsResult {
  reviews:       ReviewItem[];
  overallRating: number | null;
  totalReviews:  number | null;
  /** false when env vars are missing or the API call failed — caller can hide the "on Google" attribution. */
  isLive:        boolean;
  placeId:       string | null;
}

interface GoogleApiReview {
  author_name: string;
  rating:      number;
  text:        string;
}

const FALLBACK_REVIEWS: ReviewItem[] = [
  {
    quote:  "The 55\" QLED completely changed our living room. Picture quality is stunning and the smart features actually work smoothly, unlike our old TV.",
    name:   "Priya Sharma",
    rating: 5,
  },
  {
    quote:  "Free installation was a lifesaver — the technician arrived on time and even walked us through the app setup. Great after-sales support.",
    name:   "Rohan Mehta",
    rating: 5,
  },
  {
    quote:  "Bought the desert cooler for our shop and it handles the summer heat effortlessly. Runs quiet enough that customers don't even notice it.",
    name:   "Anitha Reddy",
    rating: 5,
  },
];

const FALLBACK_RESULT: GoogleReviewsResult = {
  reviews:       FALLBACK_REVIEWS,
  overallRating: null,
  totalReviews:  null,
  isLive:        false,
  placeId:       null,
};

// Next.js 16's fetch is uncached by default (the old implicit `next.revalidate`
// data-cache model is gone; the replacement — the `"use cache"` directive —
// requires opting the whole app into the experimental `cacheComponents` mode
// in next.config.ts). Rather than flip that site-wide switch for one API
// call, we keep a small in-memory TTL cache here instead.
const CACHE_TTL_MS = 1000 * 60 * 60 * 4; // 4 hours
let cache: { data: GoogleReviewsResult; expiresAt: number } | null = null;

/**
 * Fetches this business's reviews from the Google Places API (legacy Place
 * Details endpoint). Requires GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID env
 * vars — falls back to a small set of static reviews when either is unset
 * or the request fails, so the homepage never breaks because of this.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsResult> {
  if (cache && cache.expiresAt > Date.now()) return cache.data;

  const apiKey  = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    // Not cached — so the site picks it up immediately once the env vars are set,
    // without needing a redeploy to clear a stale "not configured" cache entry.
    return FALLBACK_RESULT;
  }

  try {
    const url =
      "https://maps.googleapis.com/maps/api/place/details/json" +
      `?place_id=${encodeURIComponent(placeId)}` +
      "&fields=review,rating,user_ratings_total" +
      `&key=${apiKey}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Google Places API HTTP ${res.status}`);

    const data = await res.json();
    if (data.status !== "OK" || !data.result) {
      throw new Error(`Google Places API status: ${data.status}${data.error_message ? ` — ${data.error_message}` : ""}`);
    }

    const reviews: ReviewItem[] = ((data.result.reviews ?? []) as GoogleApiReview[])
      .filter((r) => r.rating >= 4)
      .slice(0, 8)
      .map((r) => ({
        quote:  r.text,
        name:   r.author_name,
        rating: r.rating,
      }));

    const result: GoogleReviewsResult = {
      reviews:       reviews.length ? reviews : FALLBACK_REVIEWS,
      overallRating: typeof data.result.rating === "number" ? data.result.rating : null,
      totalReviews:  typeof data.result.user_ratings_total === "number" ? data.result.user_ratings_total : null,
      isLive:        reviews.length > 0,
      placeId,
    };
    cache = { data: result, expiresAt: Date.now() + CACHE_TTL_MS };
    return result;
  } catch (err) {
    console.error("Failed to fetch Google reviews:", err);
    return FALLBACK_RESULT;
  }
}
