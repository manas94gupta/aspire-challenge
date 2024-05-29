'use client';

import { useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from '~/components/ui/carousel';
import { Button } from '~/components/ui/button';
import { PayCard } from '~/components/cards/pay-card';

import { EyeIcon, EyeOffIcon } from 'lucide-react';

export function PayCardsCarousel() {
  const [isCardNumberVisible, setIsCardNumberVisible] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-end">
        <Button
          variant="text"
          size="text"
          className="mb-3 text-xs font-bold"
          onClick={() => setIsCardNumberVisible((prev) => !prev)}
        >
          {isCardNumberVisible ? (
            <>
              <EyeOffIcon strokeWidth={2.5} className="mr-1.5 h-4 w-4" />
              <span>Hide card number</span>
            </>
          ) : (
            <>
              <EyeIcon strokeWidth={2.5} className="mr-1.5 h-4 w-4" />
              <span>Show card number</span>
            </>
          )}
        </Button>
      </div>

      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <PayCard isCardNumberVisible={isCardNumberVisible} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </div>
  );
}