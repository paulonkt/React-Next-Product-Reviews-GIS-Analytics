import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import { getLocalRatingStats } from '@/lib/reviews';
import LazyProductDetail from '@/components/product/LazyProductDetail';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (!slug) return notFound();

  const product = products.find((p) => p.slug === slug);
  
  if (!product) return notFound();

  const stats = getLocalRatingStats(product.id);

  const fullProduct = {
    ...product,
    rating: stats.rating,
    reviews: stats.reviews,
  };

  return <LazyProductDetail product={fullProduct} />;
}
