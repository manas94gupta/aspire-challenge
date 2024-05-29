import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion';

import { CARD_DETAILS_OPTIONS } from './cards.constants';

export function CardDetails() {
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
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
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
                        Hamleys
                      </span>
                      <span className="mb-3.5 text-xs text-muted-foreground">
                        20 May 2020
                      </span>
                      <div className="flex items-center text-xs font-semibold text-primary">
                        <div className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                          <Image
                            src="/assets/images/icons/card-swipe.png"
                            width={10}
                            height={10}
                            alt={option.label}
                          />
                        </div>
                        Refund on debit card
                      </div>
                    </div>
                    <div className="text-sm font-bold">+S$ 150</div>
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
