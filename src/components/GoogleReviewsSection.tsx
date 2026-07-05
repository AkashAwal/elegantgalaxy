import { getGoogleReviews } from "@/lib/googleReviews";
import TestimonialsSection from "@/components/TestimonialsSection";

/**
 * Server Component wrapper — fetches real Google reviews (or falls back to
 * static ones if GOOGLE_PLACES_API_KEY / GOOGLE_PLACE_ID aren't configured
 * yet, see src/lib/googleReviews.ts) and hands them to the client carousel.
 */
export default async function GoogleReviewsSection() {
  const { reviews, overallRating, totalReviews, isLive, placeId } = await getGoogleReviews();

  return (
    <TestimonialsSection
      reviews={reviews}
      overallRating={overallRating}
      totalReviews={totalReviews}
      isLive={isLive}
      placeId={placeId}
    />
  );
}
