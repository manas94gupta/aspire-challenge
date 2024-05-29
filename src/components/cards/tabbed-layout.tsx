import Image from 'next/image';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Card, CardContent } from '~/components/ui/card';
import { Button } from '~/components/ui/button';

import { PayCardsCarousel } from '~/components/cards/pay-cards-carousel';
import { CardDetails } from '~/components/cards/card-details';

import { CARD_ACTIONS } from './cards.constants';

export function CardsTabbedLayout() {
  return (
    <Tabs defaultValue="debit-cards">
      <TabsList className="flex w-full gap-8">
        <TabsTrigger value="debit-cards">My Debit Cards</TabsTrigger>
        <TabsTrigger value="company-cards">All Company Cards</TabsTrigger>
      </TabsList>
      <TabsContent value="debit-cards">
        <Card>
          <CardContent className="grid grid-cols-[minmax(0,_415px)_minmax(50%,_1fr)] gap-11 px-10 py-8">
            <div className="flex flex-col gap-8">
              <PayCardsCarousel />

              {/* <div className="flex justify-around rounded-2xl bg-primary/20"> */}
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
      </TabsContent>
      <TabsContent value="company-cards">Company</TabsContent>
    </Tabs>
  );
}
