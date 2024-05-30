// Libraries
import Image from 'next/image';

// UI Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

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

              {option.name === 'recent-transactions' &&
                selectedCard?.transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex w-full gap-3 border-b py-3 first-of-type:pt-0 last-of-type:border-0"
                  >
                    <div className="bg-primary-muted flex h-12 w-12 items-center justify-center rounded-full">
                      <Image
                        src={option.iconPath}
                        width={16}
                        height={16}
                        alt={option.label}
                      />
                    </div>

                    <div className="flex flex-grow justify-between">
                      <div className="flex flex-col">
                        <span className="mb-1 text-sm font-semibold">
                          {transaction.vendor}
                        </span>
                        <span className="mb-3.5 text-xs text-muted-foreground">
                          {transaction.date}
                        </span>
                        <div className="flex items-center text-xs font-semibold text-primary">
                          <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                            <Image
                              src="/assets/images/icons/card-swipe.png"
                              width={10}
                              height={10}
                              alt={transaction.type}
                            />
                          </div>
                          {transaction.type === 'credit' &&
                            'Refund on debit card'}
                          {transaction.type === 'debit' &&
                            'Charged on debit card'}
                        </div>
                      </div>
                      <div
                        className={`text-sm font-bold ${transaction.type === 'credit' ? 'text-accent' : ''}`}
                      >
                        <span>
                          {transaction.type === 'credit' && '+'}
                          {transaction.type === 'debit' && '-'}
                        </span>
                        <span> S$ </span>
                        <span>{transaction.amount}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
