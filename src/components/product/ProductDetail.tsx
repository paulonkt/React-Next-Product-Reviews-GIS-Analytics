'use client';

import { useEffect, useState } from 'react';
import type { Product, Review } from '@/types';
import { categories } from '@/data/categories';
import { getLocalReviews } from '@/lib/reviews';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ProductHeader from './ProductHeader';
import ProductReviewList from './ProductReviewList';
import ProductReviewForm from './ProductReviewForm';

export default function ProductDetail({ product }: {product: Product}) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [fullProduct, setFullProduct] = useState<Product>(product);
  const category = categories.find((c) => c.id === product.categoryId);
  const storageKey = `reviews-${product.id}`;

  const updateProductWithReviews = (newReviews: Review[]) => {
    setReviews(newReviews);

    const total = newReviews.length;
    const avg =
      total > 0
        ? newReviews.reduce((sum, r) => sum + r.rating, 0) / total
        : 0;

    setFullProduct({
      ...product,
      rating: parseFloat(avg.toFixed(1)),
      reviews: total,
    });

    localStorage.setItem(storageKey, JSON.stringify(newReviews));
  };

  useEffect(() => {
    const stored = getLocalReviews(product.id);
    updateProductWithReviews(stored);
  }, [product]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 mb-10">
      <ProductHeader product={fullProduct} />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: `${category?.name}`, href: `/category/${category?.slug}` },
          { label: `${product.name}` },
        ]}
      />

      <ProductReviewList reviews={reviews} />

      <ProductReviewForm
        onSubmit={(newReview) => {
          const updated = [newReview, ...reviews];
          updateProductWithReviews(updated);
        }}
      />
    </div>
  );
}
