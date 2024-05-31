'use client';

// Components
import AddCardDialog from '~/components/cards/add-card-dialog';

export function CardsHeader() {
  return (
    <div className="flex items-end justify-between">
      <div className="flex flex-col gap-2">
        <div className="text-sm">Available Balance</div>
        <div className="flex items-center gap-3">
          <span className="flex h-6 w-10 items-center justify-center rounded-sm bg-accent text-sm text-accent-foreground">
            S$
          </span>
          <span className="text-2xl font-bold">3,000</span>
        </div>
      </div>
      <AddCardDialog />
    </div>
  );
}
