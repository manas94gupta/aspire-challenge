// Libraries
import Image from 'next/image';

// UI Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

// Components
import { TransactionLi } from '~/components/cards/transaction-li';

// Context
import { useCardsState } from '~/providers/CardsProvider';

// Constants
import { CARD_DETAILS_OPTIONS } from './cards.constants';

export function CardDetails() {
  const { selectedCard } = useCardsState();

  return (
    <>
      <Accordion
        type="single"
        defaultValue={CARD_DETAILS_OPTIONS[1].name}
        collapsible
        className="w-full"
      >
        {CARD_DETAILS_OPTIONS.map((option) => (
          <AccordionItem key={option.name} value={option.name}>
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <Image
                  src={option.iconPath}
                  width={24}
                  height={24}
                  alt={option.label}
                />
                <span>{option.label}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {option.name === 'card-details' && <div>Card Details</div>}

              {option.name === 'recent-transactions' && (
                <ul>
                  {selectedCard?.transactions.map((transaction) => (
                    <TransactionLi
                      key={transaction.id}
                      transaction={transaction}
                    />
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
