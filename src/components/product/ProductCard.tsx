'use client';

import type { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import RatingStars from '@/components/common/RatingStars';

export default function ProductCard({ product }: {product: Product}) {
  const { name, image, slug, rating, reviews } = product;
  
  return (
    <Link href={`/product/${slug}`}>
      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <Image
          src={image}
          alt={name}
          width={800}
          height={600}
          className="h-30 w-full object-cover object-center"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="space-y-1">
          <h3 className="text-sm text-gray-700">{name}</h3>
          <RatingStars rating={rating} size={16} />
          <p className="mt-1 text-sm text-gray-500">{reviews ?? 0} reviews</p>
        </div>
      </div>
    </Link>
  );
}
