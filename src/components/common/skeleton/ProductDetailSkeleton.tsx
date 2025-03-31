'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function ProductDetailSkeleton() {
  return (
    <>
      <div className="space-y-6 px-4 sm:px-6 lg:px-8 mb-10">
        <Skeleton className="w-full h-64 rounded-lg" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
        <div className="space-y-4 pt-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-4 bg-white shadow rounded space-y-2">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4 bg-gray-50 p-6 rounded-md">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-10 w-[150px]" />
      </div>
    </>
  );
}
