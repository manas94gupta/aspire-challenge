'use client';

// Components
import { SidenavLayout } from '~/components/applayout/sidenav-layout';
import { BottomnavLayout } from '~/components/bottomnav/bottomnav-layout';

// Hooks
import { useMediaQuery } from '~/hooks/useMediaQuery';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <div className="flex flex-col h-screen">
        <SidenavLayout>{children}</SidenavLayout>
      </div>
    );
  }

  return <BottomnavLayout>{children}</BottomnavLayout>;
}
