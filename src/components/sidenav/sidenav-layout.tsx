'use client';

// Libraries
import { useRef, useEffect } from 'react';

// UI Components
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  type ImperativePanelHandle,
} from '~/components/ui/resizable';

// Components
import { Sidenav } from './sidenav';

// Hooks
import { useMediaQuery } from '~/hooks/useMediaQuery';

// Utils
import { cn } from '~/lib/utils';

export function SidenavLayout({ children }: { children: React.ReactNode }) {
  const isSidenavCollapsed = useMediaQuery('(max-width: 1024px)');
  const sideNavRef = useRef<ImperativePanelHandle>(null);

  useEffect(() => {
    const panel = sideNavRef.current;
    if (isSidenavCollapsed) {
      panel?.collapse();
    } else {
      panel?.expand();
    }
  }, [isSidenavCollapsed]);

  return (
    <div className="h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          ref={sideNavRef}
          defaultSize={25}
          collapsedSize={6}
          collapsible={true}
          minSize={20}
          maxSize={25}
          className={cn(
            isSidenavCollapsed &&
              'min-w-[60px] transition-all duration-300 ease-in-out'
          )}
        >
          <Sidenav isSidenavCollapsed={isSidenavCollapsed} />
        </ResizablePanel>
        <ResizableHandle disabled />
        <ResizablePanel defaultSize={75}>
          <main className="lg:px-15 container h-full overflow-auto p-12">
            {children}
          </main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
