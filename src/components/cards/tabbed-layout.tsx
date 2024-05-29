import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';
import { Card, CardContent } from '~/components/ui/card';
import { PayCardsCarousel } from '~/components/cards/pay-cards-carousel';

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
            </div>
            <div>Details</div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="company-cards">Company</TabsContent>
    </Tabs>
  );
}
