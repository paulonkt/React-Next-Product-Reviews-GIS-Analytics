'use client';

import { categories } from '@/data/categories';
import CategoryCard from '@/components/category/CategoryCard';
import SectionTitle from '@/components/section/SectionTitle';

function HomeCategories() {
  return (
    <section>
      <SectionTitle>Explore Categories</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={category.id} {...category} priority={index === 0}/>
        ))}
      </div>
    </section>
  );
}

export default HomeCategories; 