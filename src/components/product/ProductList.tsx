'use client';

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/types';
import { getLocalRatingStats } from '@/lib/reviews';

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  const [fullProducts, setFullProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsWithReviews = products.map((product) => {
      const stats = getLocalRatingStats(product.id);
      return {
        ...product,
        rating: stats.rating,
        reviews: stats.reviews,
      };
    });
    setFullProducts(productsWithReviews);
  }, [products]);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {fullProducts.map((product, index) => (
          <ProductCard key={index} product={product}/>
        ))}
      </div>
    </section>
  );
}
