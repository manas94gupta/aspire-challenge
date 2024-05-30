// Libraries
import Image from 'next/image';

// Constants
import { VENDOR_TYPES_MAP } from '~/components/cards/cards.constants';

// Types
import { type TransactionType } from '~/data/cards/card-schema';

export function TransactionLi({
  transaction,
}: {
  transaction: TransactionType;
}) {
  return (
    <li
      key={transaction.id}
      className="flex w-full gap-3 border-b py-3 first-of-type:pt-0 last-of-type:border-0"
    >
      <div
        className="bg-primary-muted flex h-12 w-12 items-center justify-center rounded-full"
        style={{
          backgroundColor: VENDOR_TYPES_MAP[transaction.vendor_type].color,
        }}
      >
        <Image
          src={VENDOR_TYPES_MAP[transaction.vendor_type].iconPath}
          width={16}
          height={16}
          alt={VENDOR_TYPES_MAP[transaction.vendor_type].label}
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
            {transaction.type === 'credit' && 'Refund on debit card'}
            {transaction.type === 'debit' && 'Charged on debit card'}
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
    </li>
  );
}
