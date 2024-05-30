// UI Components
import { CardsTabbedLayout } from '~/components/cards/tabbed-layout';

// Components
import CardsHeader from '~/components/cards/cards-header';

// Providers
import { CardsProvider } from '~/providers/CardsProvider';

function Cards() {
  return (
    <CardsProvider>
      <div className="flex flex-col gap-9">
        <CardsHeader />

        <CardsTabbedLayout />
      </div>
    </CardsProvider>
  );
}

export default Cards;
