// UI Components
import { CardsTabbedLayout } from '~/components/cards/tabbed-layout';

// Components
import { CardsHeader } from '~/components/cards/cards-header';
import { CardDetailsMobileView } from '~/components/cards/card-details-mobile-view';

// Providers
import { CardsProvider } from '~/providers/CardsProvider';

function Cards() {
  return (
    <CardsProvider>
      <div className="fixed w-full text-sidenav-foreground md:text-inherit top-0 left-0 p-6 md:p-0 md:static flex flex-col gap-9">
        <CardsHeader />

        <CardsTabbedLayout />
      </div>
      <div className="relative z-10 top-[460px] rounded-t-3xl">
        <CardDetailsMobileView />
      </div>
    </CardsProvider>
  );
}

export default Cards;
