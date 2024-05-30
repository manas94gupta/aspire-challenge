// Libraries
import Image from 'next/image';

// UI Components
import { Button } from '~/components/ui/button';

// Context
import { useCardsDispatch, useCardsState } from '~/providers/CardsProvider';

// Constants
import { CARD_ACTIONS } from './cards.constants';

type ClickActionType = (typeof CARD_ACTIONS)[number]['clickAction'];

export function CardActions() {
  const { selectedCard } = useCardsState();
  const cardsDispatch = useCardsDispatch();

  function handleCardActionClick(type: ClickActionType) {
    switch (type) {
      case 'freeze': {
        if (selectedCard) {
          cardsDispatch({
            type: 'freeze',
            cardId: selectedCard.id,
          });
        }
        return;
      }
      case 'set-limit': {
        console.log('Set limit');
        return;
      }
      case 'gpay': {
        console.log('GPay');
        return;
      }
      case 'replace': {
        console.log('Replace');
        return;
      }
      case 'cancel': {
        console.log('Cancel');
        return;
      }
      default: {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _exhaustiveCheck: never = type;
        throw new Error('Unknown type: ' + type);
      }
    }
  }

  return (
    <div className="bg-primary-muted grid grid-cols-5 items-baseline justify-around rounded-2xl p-5">
      <Button
        variant="ghost"
        className="flex h-auto flex-col gap-2 text-wrap text-xs text-card-foreground hover:bg-transparent hover:text-inherit"
        onClick={() => handleCardActionClick(CARD_ACTIONS[0].clickAction)}
      >
        <Image
          src={CARD_ACTIONS[0].iconPath}
          width={32}
          height={32}
          alt="Aspire"
        />
        <span>
          {selectedCard?.status === 'inactive'
            ? 'Unfreeze Card'
            : 'Freeze Card'}
        </span>
      </Button>
      {CARD_ACTIONS.slice(1).map((action) => (
        <Button
          key={action.label}
          variant="ghost"
          className="flex h-auto flex-col gap-2 text-wrap text-xs text-card-foreground hover:bg-transparent hover:text-inherit"
          onClick={() => handleCardActionClick(action.clickAction)}
        >
          <Image src={action.iconPath} width={32} height={32} alt="Aspire" />
          <span>{action.label}</span>
        </Button>
      ))}
    </div>
  );
}
