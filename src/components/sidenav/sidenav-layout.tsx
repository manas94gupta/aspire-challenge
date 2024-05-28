import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '~/components/ui/resizable';
import { Sidenav } from './sidenav';

export function SidenavLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={25}
          collapsedSize={4}
          collapsible={true}
          minSize={20}
          maxSize={25}
        >
          <Sidenav />
        </ResizablePanel>
        <ResizableHandle disabled />
        <ResizablePanel defaultSize={75}>
          <main className="lg:p-15 container h-full overflow-auto p-12">
            {children}
          </main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
