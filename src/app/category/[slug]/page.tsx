import { notFound } from 'next/navigation';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import HeroSection from '@/components/section/HeroSection';
import LazyProductList from '@/components/product/LazyProductList';

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  
  if (!category) return notFound();

  const filteredProducts = products.filter((p) => p.categoryId === category.id);

  return (
    <div className="space-y-10 my-10 px-4 sm:px-6 lg:px-8">
      <HeroSection
        title={category.name}
        subtitle={category.description}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: `${category.name}` },
        ]}
      />

      <LazyProductList products={filteredProducts} />
    </div>
  );
}
