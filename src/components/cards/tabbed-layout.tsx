import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

export function CardsTabbedLayout() {
  return (
    <Tabs defaultValue="debit-cards">
      <TabsList className="flex w-full gap-8">
        <TabsTrigger value="debit-cards">My Debit Cards</TabsTrigger>
        <TabsTrigger value="company-cards">All Company Cards</TabsTrigger>
      </TabsList>
      <TabsContent value="debit-cards">Debit Cards</TabsContent>
      <TabsContent value="company-cards">Company</TabsContent>
    </Tabs>
  );
}
