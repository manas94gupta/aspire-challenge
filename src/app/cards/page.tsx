import Image from 'next/image';

import { Button } from '~/components/ui/button';

function Cards() {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-sm">Available Balance</div>
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-10 items-center justify-center rounded-sm bg-accent text-sm text-accent-foreground">
              $$
            </span>
            <span className="text-2xl font-bold">3,000</span>
          </div>
        </div>
        <Button size="sm">
          <Image
            src="/assets/images/icons/add.png"
            width={16}
            height={16}
            alt="Add"
            className="mr-2"
          />
          New Card
        </Button>
      </div>
    </div>
  );
}

export default Cards;
