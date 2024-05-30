'use client';

// Libraries
import { useEffect } from 'react';
import { z } from 'zod';
import Image from 'next/image';

// UI Components
import { Card, CardContent } from '~/components/ui/card';
import { Button } from '~/components/ui/button';

// Components
import { PayCardsCarousel } from '~/components/cards/pay-cards-carousel';
import { CardDetails } from '~/components/cards/card-details';

// Context
import { useCardsDispatch } from '~/providers/CardsProvider';

// Hooks
import { useFetch } from '~/hooks/useFetch';

// Constants
import { CARD_ACTIONS, CARD_TABS } from './cards.constants';

// Utils
import { wait } from '~/lib/utils';

// Schema
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

// Simulate cards fetching
async function fetchCards(type: CardTabValue): Promise<CardType[]> {
  await wait(1000);

  switch (type) {
    case 'my-cards':
      return Promise.resolve(myCards as CardType[]);
    case 'company-cards':
      return Promise.resolve(companyCards as CardType[]);
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = type;
      throw new Error('Invalid card type');
  }
}

export function ViewCards({ type }: ViewCardsProps) {
  const cardsDispatch = useCardsDispatch();
  const { data: cards } = useFetch<CardType[], CardTabValue>(fetchCards, type);
  console.log(cards);

  useEffect(() => {
    // Dispatch action to store cards
    if (cards) {
      cardsDispatch({ type: 'initialFetch', cards });
    }
  }, [cards, cardsDispatch]);

  return (
    <Card>
      <CardContent className="grid grid-cols-[minmax(0,_415px)_minmax(50%,_1fr)] gap-11 px-10 py-8">
        <div className="flex flex-col gap-8">
          <PayCardsCarousel cards={cards} />

          <div className="bg-primary-muted grid grid-cols-5 items-baseline justify-around rounded-2xl p-5">
            {CARD_ACTIONS.map((action) => (
              <Button
                key={action.label}
                variant="ghost"
                className="flex h-auto flex-col gap-2 text-wrap text-xs text-card-foreground hover:bg-transparent hover:text-inherit"
                // onClick={() => console.log(action.clickAction)}
              >
                <Image
                  src={action.iconPath}
                  width={32}
                  height={32}
                  alt="Aspire"
                />
                <span>{action.label}</span>
              </Button>
            ))}
          </div>
        </div>
        <div>
          <CardDetails />
        </div>
      </CardContent>
    </Card>
  );
}
