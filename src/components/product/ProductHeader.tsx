'use client';

import type { Product } from '@/types';
import Image from 'next/image';
import RatingStars from '@/components/common/RatingStars';

export default function ProductHeader({ product }: {product: Product}) {
  const { name, image, rating, reviews } = product;
  
  return (
    <div className="relative w-full mb-6">
      <Image
        src={image}
        alt={name}
        width={800}
        height={600}
        priority
        className="w-full max-h-96 object-cover shadow"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end p-6">
        <div className="text-white space-y-1">
          <h1 className="text-3xl font-bold">{name}</h1>
          <RatingStars rating={rating} size={20} />
          <p className="text-sm">{reviews} reviews</p>
        </div>
      </div>
    </div>
  );
}
