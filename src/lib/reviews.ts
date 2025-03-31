export type Review = {
  author: string;
  comment: string;
  rating: number;
};

export function getLocalReviews(productId: number): Review[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(`reviews-${productId}`);
    return raw ? (JSON.parse(raw) as Review[]) : [];
  } catch {
    return [];
  }
}

export function getLocalRatingStats(productId: number): { rating: number; reviews: number } {
  const reviews = getLocalReviews(productId);
  const total = reviews.length;
  const avg =
    total > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / total : 0;
  return {
    rating: parseFloat(avg.toFixed(1)),
    reviews: total,
  };
}
