'use client';

import type { Review } from '@/types';
import RatingStars from '@/components/common/RatingStars';

export default function ProductReviewItem({ review }: { review: Review }) {
  return (
    <div className="p-4 shadow rounded-lg bg-white mb-4">
      <div className="flex justify-between items-center">
        <span className="text-sm font-semibold text-gray-800">{review.author}</span>
        <RatingStars rating={review.rating} size={16} />
      </div>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{review.comment}</p>
    </div>
  );
}
