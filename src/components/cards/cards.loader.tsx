// UI Components
import { Skeleton } from '~/components/ui/skeleton';
import { Card, CardContent } from '~/components/ui/card';

export function CardsLoaderMobile() {
  return (
    <>
      <div className="flex flex-col md:space-y-12">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-2 md:h-4 w-[200px] md:self-end" />
          <Skeleton className="aspect-idcard max-w-[400px] rounded-xl" />
        </div>
        <div className="hidden md:block">
          <Skeleton className="h-20" />
        </div>
      </div>
      <div className="hidden md:flex flex-col space-y-6">
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

export function CardsLoaderDesktop() {
  return (
    <Card>
      <CardContent className="grid grid-cols-[minmax(0,_415px)_minmax(50%,_1fr)] gap-11 px-10 py-8">
        <div className="flex flex-col md:space-y-12">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-2 md:h-4 w-[200px] md:self-end" />
            <Skeleton className="aspect-idcard max-w-[400px] rounded-xl" />
          </div>
          <div className="hidden md:block">
            <Skeleton className="h-20" />
          </div>
        </div>
        <div className="hidden md:flex flex-col space-y-6">
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
      </CardContent>
    </Card>
  );
}
