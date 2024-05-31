// Libraries
import Link from 'next/link';

// UI Components
import { buttonVariants } from '~/components/ui/button';

// Utils
import { cn } from '~/lib/utils';

function NotFound() {
  return (
    <div className="flex h-[600px] md:h-full items-center justify-center rounded-lg bg-gray-100">
      <div className="mx-auto max-w-xl px-6">
        <div className="mb-8 flex flex-row items-center justify-center">
          <div className="border-r border-gray-400 px-4 text-lg tracking-wider text-gray-500 md:text-xl">
            404
          </div>
          <div className="ml-4 text-xl uppercase tracking-wider text-gray-500">
            Not Found
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="md:text-md ml-4 text-center text-sm uppercase tracking-wider text-gray-500">
            Perhaps you were looking for the Cards page
          </div>
          <div>
            <Link
              href="/cards"
              className={cn(
                buttonVariants({ variant: 'default', size: 'sm' }),
                'rounded px-8 py-3 font-semibold dark:bg-violet-600 dark:text-gray-50'
              )}
            >
              Go to Cards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
