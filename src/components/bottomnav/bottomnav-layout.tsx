// Components
import { Bottomnav } from '../bottomnav/bottomnav';

export function BottomnavLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="h-full overflow-auto p-6 pb-[68px]">{children}</main>

      <Bottomnav />
    </div>
  );
}
