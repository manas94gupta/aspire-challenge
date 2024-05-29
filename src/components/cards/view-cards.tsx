import { promises as fs } from 'fs';
import path from 'path';
import { z } from 'zod';
import Image from 'next/image';

import { Card, CardContent } from '~/components/ui/card';
import { Button } from '~/components/ui/button';

import { PayCardsCarousel } from '~/components/cards/pay-cards-carousel';
import { CardDetails } from '~/components/cards/card-details';

import { CARD_ACTIONS, CARD_TABS } from './cards.constants';

import { cardSchema } from '~/data/cards/card-schema';

import { wait } from '~/lib/utils';

type CardTabValue = (typeof CARD_TABS)[number]['value'];

interface ViewCardsProps {
  type: CardTabValue;
}

// Simulate a database read for cards.
async function getCards(type: CardTabValue) {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      `src/data/cards/${type === 'my-cards' ? 'my-cards' : 'company-cards'}.json`
    )
  );

  const tasks = JSON.parse(data.toString());

  // emulate a delay
  await wait(3000);

  return z.array(cardSchema).parse(tasks);
}

export async function ViewCards({ type }: ViewCardsProps) {
  const cards = await getCards(type);

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
