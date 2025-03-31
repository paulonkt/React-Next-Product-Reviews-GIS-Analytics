import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@/types';

export default function CategoryCard({ slug, name, image, description, priority }: Category) {
  return (
    <Link href={`/category/${slug}`}>
      <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
        <Image
          src={image}
          alt={name}
          width={800}
          height={600}
          className="h-40 w-full object-cover object-center"
          priority={priority}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}
