'use client';

import {
  createContext,
  useContext,
  useState,
  useReducer,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

import { type CardType } from '~/data/cards/card-schema';

type CardsState = CardType[];

// Define action types
type Action =
  | { type: 'initialFetch'; cards: CardsState }
  | { type: 'added'; card: CardType }
  | { type: 'freeze'; cardId: string }
  | { type: 'changed'; card: CardType };

// Create contexts
const CardsContext = createContext<CardsState | undefined>(undefined);
const CardsDispatchContext = createContext<Dispatch<Action> | undefined>(
  undefined
);
const CardsStateContext = createContext<
  | {
      selectedCard: CardType | undefined;
      setSelectedCard: Dispatch<SetStateAction<CardType | undefined>>;
    }
  | undefined
>(undefined);

const initialCards: CardsState = [];

function cardsReducer(cards: CardsState, action: Action): CardsState {
  switch (action.type) {
    case 'initialFetch': {
      return [...action.cards];
    }
    case 'added': {
      return [action.card, ...cards];
    }
    case 'freeze': {
      return cards.map((card) => {
        if (card.id === action.cardId) {
          return {
            ...card,
            status: card.status === 'inactive' ? 'active' : 'inactive',
          };
        } else {
          return card;
        }
      });
    }
    case 'changed': {
      return cards.map((card) => {
        if (card.id === action.card.id) {
          return action.card;
        } else {
          return card;
        }
      });
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _exhaustiveCheck: never = action;
      throw new Error('Unknown action: ' + action);
    }
  }
}

interface CardsProviderProps {
  children: ReactNode;
}

export function CardsProvider({ children }: CardsProviderProps) {
  const [cards, dispatch] = useReducer(cardsReducer, initialCards);
  const [selectedCard, setSelectedCard] = useState<CardType | undefined>(
    undefined
  );

  return (
    <CardsContext.Provider value={cards}>
      <CardsDispatchContext.Provider value={dispatch}>
        <CardsStateContext.Provider value={{ selectedCard, setSelectedCard }}>
          {children}
        </CardsStateContext.Provider>
      </CardsDispatchContext.Provider>
    </CardsContext.Provider>
  );
}

export function useCards() {
  const context = useContext(CardsContext);
  if (context === undefined) {
    throw new Error('useCards must be used within a CardsProvider');
  }
  return context;
}

export function useCardsDispatch() {
  const context = useContext(CardsDispatchContext);
  if (context === undefined) {
    throw new Error('useCardsDispatch must be used within a CardsProvider');
  }
  return context;
}

export function useCardsState() {
  const context = useContext(CardsStateContext);
  if (context === undefined) {
    throw new Error('useCardSelected must be used within a CardsProvider');
  }
  return context;
}
