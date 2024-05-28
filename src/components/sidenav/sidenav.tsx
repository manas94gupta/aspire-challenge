import Image from 'next/image';
import Link from 'next/link';

// Constants
import { NAV_ITEMS } from './sidenav.constants';

export function Sidenav() {
  return (
    <div className="bg-sidenav h-full p-8 lg:p-12">
      <div className="mb-20">
        <Image
          src="/assets/images/logo.png"
          width={125}
          height={35}
          alt="Aspire"
          className="mb-4"
        />
        <p className="text-xs text-muted-foreground">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </p>
      </div>
      <div className="gap-15 flex flex-col">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group/navlink text-sidenav-foreground flex items-center gap-4 hover:text-accent"
          >
            <item.icon className="fill-sidenav-foreground h-6 w-6 group-hover/navlink:fill-accent" />
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
