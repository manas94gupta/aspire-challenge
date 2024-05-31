'use client';

// Libraries
import { useEffect } from 'react';
import { z } from 'zod';

// UI Components
import { Card, CardContent } from '~/components/ui/card';

// Components
import { PayCardsCarousel } from '~/components/cards/pay-cards-carousel';
import { CardDetails } from '~/components/cards/card-details';
import { CardActions } from '~/components/cards/card-actions';

// Context
import { useCardsDispatch } from '~/providers/CardsProvider';

// Hooks
import { useFetch } from '~/hooks/useFetch';
import { useMediaQuery } from '~/hooks/useMediaQuery';

// Constants
import { CARD_TABS } from './cards.constants';

// Loaders
import { CardsLoaderMobile, CardsLoaderDesktop } from './cards.loader';

// Utils
import { wait } from '~/lib/utils';

// Schemas
import { cardSchema } from '~/data/cards/card-schema';

// Types
import { type CardType } from '~/data/cards/card-schema';

// Data
import myCards from '~/data/cards/my-cards.json';
import companyCards from '~/data/cards/company-cards.json';

type CardTabValue = (typeof CARD_TABS)[number]['value'];

interface ViewCardsProps {
  type: CardTabValue;
}

// Simulate cards fetching and schema validation
async function fetchCards(type: CardTabValue): Promise<CardType[]> {
  await wait(1000);

  switch (type) {
    case 'my-cards': {
      const cards = z.array(cardSchema).parse(myCards);
      return Promise.resolve(cards);
    }
    case 'company-cards': {
      const cards = z.array(cardSchema).parse(companyCards);
      return Promise.resolve(cards);
    }
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = type;
      throw new Error('Invalid card type');
  }
}

export function ViewCards({ type }: ViewCardsProps) {
  const cardsDispatch = useCardsDispatch();
  const { data: cards, loading } = useFetch<CardType[], CardTabValue>(
    fetchCards,
    type
  );
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    // Dispatch action to store cards
    if (cards) {
      cardsDispatch({ type: 'initialFetch', cards });
    }
  }, [cards, cardsDispatch]);

  if (loading) {
    return isDesktop ? <CardsLoaderDesktop /> : <CardsLoaderMobile />;
  }

  if (isDesktop) {
    return (
      <Card>
        <CardContent className="grid grid-cols-[minmax(0,_415px)_minmax(50%,_1fr)] gap-11 px-10 py-8">
          <div className="flex flex-col gap-8">
            <PayCardsCarousel />

            <CardActions />
          </div>
          <div>
            <CardDetails />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <div className="w-[calc(100vw-48px)]">
        <PayCardsCarousel />
      </div>
    </>
  );
}
