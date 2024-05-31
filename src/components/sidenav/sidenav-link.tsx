// Libraries
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// UI Components
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '~/components/ui/tooltip';

// Constants
import { NAV_ITEMS } from './sidenav.constants';

// Utils
import { cn } from '~/lib/utils';

type NavItem = (typeof NAV_ITEMS)[number];

export function SidenavLink({
  isSidenavCollapsed,
  item,
}: {
  isSidenavCollapsed: boolean;
  item: NavItem;
}) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return isSidenavCollapsed ? (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          href={item.href}
          className={cn(
            'group/navlink text-sidenav-foreground flex h-10 w-10 items-center justify-center hover:text-accent',
            isActive && 'text-accent'
          )}
        >
          <item.icon
            className={cn(
              'fill-sidenav-foreground h-6 w-6 group-hover/navlink:fill-accent',
              isActive && 'fill-accent'
            )}
          />
          <span className="sr-only">{item.label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="flex items-center gap-4">
        {item.label}
      </TooltipContent>
    </Tooltip>
  ) : (
    <Link
      key={item.label}
      href={item.href}
      className={cn(
        'group/navlink text-sidenav-foreground flex items-center gap-4 hover:text-accent',
        isActive && 'text-accent'
      )}
    >
      <item.icon
        className={cn(
          'fill-sidenav-foreground h-6 w-6 group-hover/navlink:fill-accent',
          isActive && 'fill-accent'
        )}
      />
      {item.label}
    </Link>
  );
}
