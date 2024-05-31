// Components
import { BottomnavLink } from './bottomnav-link';

// Constants
import { NAV_ITEMS } from '~/components/sidenav/sidenav.constants';

export function Bottomnav() {
  return (
    <div className="fixed bottom-0 w-full flex justify-evenly py-3 bg-bottomnav shadow-y-negative">
      {NAV_ITEMS.map((item) => (
        <BottomnavLink key={item.label} item={item} />
      ))}
    </div>
  );
}
