'use client';

import dynamic from 'next/dynamic';
import ProductListSkeleton from '@/components/common/skeleton/ProductListSkeleton';

const ProductList = dynamic(() => import('@/components/product/ProductList'), {
  ssr: false,
  loading: () => <ProductListSkeleton />,
});

export default ProductList;
