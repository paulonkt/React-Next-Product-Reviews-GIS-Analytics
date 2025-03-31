'use client';

import { useEffect, useState } from 'react';
import { Product } from '@/types';
import { products } from '@/data/products';
import { getLocalRatingStats } from '@/lib/reviews';
import SectionTitle from '@/components/section/SectionTitle';
import ProductCard from '@/components/product/ProductCard';

type Props = {
  limit?: number;
};

export default function TopRatedProducts({ limit }: Props) {
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const productsWithReviews = products.map((product) => {
      const stats = getLocalRatingStats(product.id);
      return {
        ...product,
        rating: stats.rating,
        reviews: stats.reviews,
      };
    });

    const sorted = [...productsWithReviews]
      .sort((a, b) => {
        if (b.rating !== a.rating) {
          return b.rating - a.rating;
        }
        return b.reviews - a.reviews;
      })
      .slice(0, limit ?? products.length);

    setSortedProducts(sorted);

  }, [products]);

  return (
    <section>
      <SectionTitle>Top-Rated Products</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
} 