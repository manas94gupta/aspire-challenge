// Libraries
import Image from 'next/image';

// Utils
import { maskString, splitString } from '~/lib/utils';

// Constants
import { CARD_TYPES_MAP } from './cards.constants';

// Schema
import { type CardType } from '~/data/cards/card-schema';

interface PayCardProps {
  isCardNumberVisible: boolean;
  card: CardType;
}

export function PayCard({ isCardNumberVisible, card }: PayCardProps) {
  return (
    <div className="relative">
      {card.status === 'inactive' ? (
        <div className="absolute left-1/2 top-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] flex-col items-center justify-center text-4xl font-bold text-primary/50 drop-shadow-lg">
          Card Inactive
        </div>
      ) : null}
      <div
        className={`${card.status === 'inactive' ? 'opacity-50' : ''} aspect-idcard h-full w-full max-w-[320px] overflow-hidden rounded-xl p-[6%] tracking-widest text-accent-foreground  md:max-h-[253px] md:max-w-[415px]`}
        style={{
          background: CARD_TYPES_MAP[card.type].color,
        }}
      >
        <div className="mb-0 md:mb-[2%] text-right xl:mb-[6%]">
          <div className="relative inline-block h-[28px] w-[20%]">
            <Image
              src="/assets/images/cards/logo.png"
              fill={true}
              alt="Aspire"
              className="object-contain"
            />
          </div>
        </div>
        <div className="mb-[6%] text-2xl md:text-[calc((1vw/57)*100)] font-bold xl:mb-[7%] xl:text-2xl">
          {card.name}
        </div>
        <div className="mb-[4%] flex gap-0.5 font-mono text-sm md:text-[calc((1vw/97.5)*100)] font-bold md:gap-0 lg:gap-0.5 xl:mb-[5%] xl:text-sm">
          {/* eg: maskString('12345678', 4) => '****5678' then splitString('****5678') => ['*', '*', '*', '*', '5', '6', '7', '8'] */}
          {splitString(
            isCardNumberVisible ? card.number : maskString(card.number, 12)
          ).map((num, i) => (
            <span
              key={i}
              className={`${(i + 1) % 4 ? '' : 'mr-3 md:mr-1 lg:mr-3'}`}
            >
              {num}
            </span>
          ))}
        </div>
        <div className="mb-[1%] flex gap-9 text-xs md:text-[calc((1vw/105)*100)] font-bold xl:mb-[1.5%] xl:text-xs">
          <span>Thru: {card.valid_thru}</span>
          <span>
            CVV:{' '}
            <span className="font-mono">{maskString(card.cvv, 3, '*')}</span>
          </span>
        </div>
        <div className="text-end">
          <div className="relative inline-block h-[23px] w-[16%]">
            <Image
              src={CARD_TYPES_MAP[card.type].iconPath}
              fill={true}
              alt="Visa"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
