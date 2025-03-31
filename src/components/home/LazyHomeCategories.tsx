'use client';
import dynamic from 'next/dynamic';
import HomeCategorySkeleton from '@/components/common/skeleton/HomeCategorySkeleton';

const HomeCategories = dynamic(() => import('@/components/home/HomeCategories'), {
  ssr: false,
  loading: () => <HomeCategorySkeleton />,
});

export default HomeCategories;