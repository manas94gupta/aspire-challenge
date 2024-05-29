import Image from 'next/image';

import { maskString, splitString } from '~/lib/utils';

export function PayCard({
  isCardNumberVisible,
}: {
  isCardNumberVisible: boolean;
}) {
  return (
    <div className="aspect-idcard h-full w-full max-w-[358px] overflow-hidden rounded-xl bg-accent p-[6%] text-accent-foreground md:max-h-[253px] md:max-w-[415px]">
      <div className="mb-[2%] text-right xl:mb-[6%]">
        <div className="relative inline-block h-[28px] w-[20%]">
          <Image
            src="/assets/images/cards/logo.png"
            fill={true}
            alt="Aspire"
            className="object-contain"
          />
        </div>
      </div>
      <div className="mb-[6%] text-[calc((1vw/57)*100)] font-bold xl:mb-[7%] xl:text-2xl">
        Mark Henry
      </div>
      <div className="mb-[4%] flex gap-0.5 font-mono text-[calc((1vw/97.5)*100)] font-bold xl:mb-[5%] xl:text-sm">
        {splitString(
          isCardNumberVisible
            ? '4578901234567890'
            : maskString('4578901234567890', 12)
        ).map((num, i) => (
          <span key={i} className={`${(i + 1) % 4 ? '' : 'mr-5'}`}>
            {num}
          </span>
        ))}
      </div>
      <div className="mb-[1%] flex gap-9 text-[calc((1vw/105)*100)] font-bold xl:mb-[1.5%] xl:text-xs">
        <span>Thru: 12/25</span>
        <span>CVV: ***</span>
      </div>
      <div className="text-end">
        <div className="relative inline-block h-[23px] w-[16%]">
          <Image
            src="/assets/images/cards/visa.png"
            fill={true}
            alt="Visa"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
