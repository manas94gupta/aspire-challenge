'use client';

// Libraries
import { useState } from 'react';
import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// UI Components
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Button } from '~/components/ui/button';
import { useToast } from '~/components/ui/use-toast';

// Context
import { useCardsDispatch } from '~/providers/CardsProvider';

// Utils
import { wait } from '~/lib/utils';
import { getRandomPayCard } from '~/components/cards/cards.utils';

// Types
import { type CardType } from '~/data/cards/card-schema';

type CardFormData = {
  name: string;
};

export function AddCardForm({ closeDialog }: { closeDialog: () => void }) {
  const [cardData] = useState<CardType>(getRandomPayCard);
  const cardsDispatch = useCardsDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const cardFormSchema: ZodType<CardFormData> = z.object({
    name: z.string().min(2, {
      message: 'Name must be at least 2 characters',
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CardFormData>({
    resolver: zodResolver(cardFormSchema),
  });

  async function handleAddCard(data: CardFormData) {
    setIsLoading(true);

    const newCard = {
      ...cardData,
      name: data.name,
    };

    cardsDispatch({ type: 'added', card: newCard });

    // Simulate api latency
    await wait(500);

    setIsLoading(false);

    toast({
      title: 'New card added successfully.',
      description: 'Now you can manage this card on the go.',
    });

    closeDialog();
  }

  return (
    <form
      onSubmit={handleSubmit(handleAddCard)}
      className="flex flex-col gap-4"
    >
      <div className="flex w-full flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          {...register('name')}
          id="name"
          placeholder="Enter name as on card"
          autoComplete="name"
        />
        <span className="text-xs text-destructive">
          {errors?.name?.message ?? null}
        </span>
      </div>
      <div className="flex w-full flex-col gap-2">
        <Label htmlFor="number">Number</Label>
        <Input
          type="text"
          id="number"
          placeholder="Card Number"
          disabled
          value={cardData.number}
        />
      </div>
      <div className="flex gap-4">
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="expiry">Expiry</Label>
          <Input
            type="text"
            id="expiry"
            placeholder="Valid Till"
            disabled
            value={cardData.valid_thru}
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Label htmlFor="cvv">CVV</Label>
          <Input
            type="password"
            id="cvv"
            placeholder="123"
            disabled
            value={cardData.cvv}
          />
        </div>
      </div>
      <Button disabled={isLoading} className="mt-4">
        {isLoading ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center gap-2">
              <span className="sr-only">Loading...</span>
              <div className="h-2 w-2 animate-bounce rounded-full bg-primary-foreground [animation-delay:-0.3s]"></div>
              <div className="h-2 w-2 animate-bounce rounded-full bg-primary-foreground [animation-delay:-0.15s]"></div>
              <div className="h-2 w-2 animate-bounce rounded-full bg-primary-foreground"></div>
            </div>
            {/* <span>Adding...</span> */}
          </div>
        ) : (
          'Add Card'
        )}
      </Button>
    </form>
  );
}
