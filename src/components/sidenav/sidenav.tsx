// Libraries
import Image from 'next/image';

// Components
import { SidenavLink } from './sidenav-link';

// Constants
import { NAV_ITEMS } from './sidenav.constants';

export function Sidenav({
  isSidenavCollapsed,
}: {
  isSidenavCollapsed: boolean;
}) {
  return (
    <div className="bg-sidenav h-full p-2 lg:p-12">
      <div className="mb-20">
        <Image
          src="/assets/images/logo.png"
          width={125}
          height={35}
          alt="Aspire"
          className="my-3 lg:mb-4"
        />
        <p className="hidden text-xs text-muted-foreground lg:block">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>
      <div className="gap-15 flex flex-col">
        {NAV_ITEMS.map((item) => (
          <SidenavLink
            key={item.label}
            isSidenavCollapsed={isSidenavCollapsed}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
