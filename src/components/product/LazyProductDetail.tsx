'use client';

import dynamic from 'next/dynamic';
import ProductDetailSkeleton from '@/components/common/skeleton/ProductDetailSkeleton';

const ProductDetail = dynamic(() => import('@/components/product/ProductDetail'), {
  ssr: false,
  loading: () => <ProductDetailSkeleton />,
});

export default ProductDetail;
