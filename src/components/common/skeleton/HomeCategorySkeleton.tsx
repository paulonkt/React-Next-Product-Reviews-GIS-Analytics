'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function HomeCategorySkeleton() {
  return (
    <>
      <Skeleton className='h-10'></Skeleton>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="w-full h-40 rounded-lg" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        ))}
      </div>
    </>
  );
}
