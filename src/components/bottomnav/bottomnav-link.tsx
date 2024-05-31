// Libraries
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Constants
import { NAV_ITEMS } from '~/components/sidenav/sidenav.constants';

// Utils
import { cn } from '~/lib/utils';

type NavItem = (typeof NAV_ITEMS)[number];

export function BottomnavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      key={item.label}
      href={item.href}
      className={cn(
        'group/navlink text-bottomnav-foreground flex flex-col text-xs items-center gap-1 hover:text-accent',
        isActive && 'text-accent'
      )}
    >
      <item.icon
        className={cn(
          'fill-bottomnav-foreground h-6 w-6 group-hover/navlink:fill-accent',
          isActive && 'fill-accent'
        )}
      />
      {item.label}
    </Link>
  );
}
