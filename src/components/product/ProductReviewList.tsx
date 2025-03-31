'use client';

import type { Review } from '@/types';
import ProductReviewItem from '@/components/product/ProductReviewItem';
import SectionTitle from '@/components/section/SectionTitle';

export default function ProductReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <div className="mt-8">
      <SectionTitle>Reviews</SectionTitle>
      {reviews.length === 0 ? (
        <div className="mt-4 text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          {reviews.map((review, index) => (
            <ProductReviewItem key={index} review={review} />
          ))}
        </div>
      )}
    </div>
  );
} 