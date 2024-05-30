// UI Components
import { Skeleton } from '~/components/ui/skeleton';

export function CardsLoader() {
  return (
    <>
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-4 w-[200px] self-end" />
          <Skeleton className="aspect-idcard rounded-xl" />
        </div>
        <div>
          <Skeleton className="h-20" />
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <Skeleton className="h-[80px] rounded-xl" />
        <Skeleton className="h-[80px] rounded-xl" />
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[350px]" />
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[80px]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
