// UI Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs';

// Components
import { ViewCards } from './view-cards';

// Constants
import { CARD_TABS } from './cards.constants';

export function CardsTabbedLayout() {
  return (
    <Tabs defaultValue={CARD_TABS[0].value}>
      <TabsList className="flex w-full gap-8">
        {CARD_TABS.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {CARD_TABS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <ViewCards type={tab.value} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
