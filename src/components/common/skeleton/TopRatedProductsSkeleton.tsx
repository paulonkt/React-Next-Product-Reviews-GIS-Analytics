import { Skeleton } from '@/components/ui/skeleton';

export default function TopRatedProductsSkeleton() {
  return (
    <>
      <Skeleton className='h-10'></Skeleton>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-xl p-4 bg-white space-y-2">
            <Skeleton className="h-30 w-full rounded-md" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    </>
  );
}
