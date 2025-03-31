'use client';
import dynamic from 'next/dynamic';
import TopRatedProductsSkeleton from '@/components/common/skeleton/TopRatedProductsSkeleton';

const TopRatedProducts = dynamic(() => import('@/components/home/TopRatedProducts'), {
  ssr: false,
  loading: () => <TopRatedProductsSkeleton />,
});

export default TopRatedProducts;