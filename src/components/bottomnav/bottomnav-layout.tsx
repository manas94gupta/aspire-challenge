// Components
import { Bottomnav } from '../bottomnav/bottomnav';

export function BottomnavLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="h-full min-h-[500px] bg-sidenav pb-bottomnav-height">
        {children}
      </main>

      <Bottomnav />
    </div>
  );
}
