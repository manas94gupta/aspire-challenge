'use client';

// Libraries
import { useState, useEffect } from 'react';

// UI Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from '~/components/ui/carousel';
import { Button } from '~/components/ui/button';

// Components
import { PayCard } from '~/components/cards/pay-card';

// Icons
import { EyeIcon, EyeOffIcon } from 'lucide-react';

// Hooks
import { useCards, useCardsState } from '~/providers/CardsProvider';

// Types
import { type CarouselApi } from '~/components/ui/carousel';

export function PayCardsCarousel() {
  const [isCardNumberVisible, setIsCardNumberVisible] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(0);
  const cards = useCards();
  const { setSelectedCard } = useCardsState();
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    // Update selected card in store when user changes the slide in carousel
    setSelectedCard(cards?.[selectedSlide]);
  }, [selectedSlide, cards, setSelectedCard]);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    function handleSlideSelect(e: CarouselApi) {
      const currentSlide = e?.selectedScrollSnap();
      if (currentSlide !== undefined) {
        setSelectedSlide(currentSlide);
      }
    }

    carouselApi.on('select', handleSlideSelect);

    return () => {
      carouselApi.off('select', handleSlideSelect);
    };
  }, [carouselApi]);

  return (
    <div>
      <div className="flex items-center md:justify-end">
        <Button
          variant="text"
          size="text"
          className="mb-3 text-[10px] md:text-xs font-bold"
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

      <Carousel setApi={setCarouselApi} className="w-full">
        <CarouselContent>
          {cards?.map((card) => (
            <CarouselItem key={card.id} className="basis-[350px] md:basis-full">
              <PayCard isCardNumberVisible={isCardNumberVisible} card={card} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots />
      </Carousel>
    </div>
  );
}
