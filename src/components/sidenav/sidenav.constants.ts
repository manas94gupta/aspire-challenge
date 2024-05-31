// Icons
import { Icons } from './sidenav.icons';

export const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
    icon: Icons.home,
  },
  {
    label: 'Cards',
    href: '/cards',
    icon: Icons.cards,
  },
  {
    label: 'Payments',
    href: '/payments',
    icon: Icons.payments,
  },
  {
    label: 'Credit',
    href: '/credit',
    icon: Icons.credit,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: Icons.settings,
  },
] as const;
