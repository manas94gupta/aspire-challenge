'use client';

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
} from 'react';

import { type CardType } from '~/data/cards/card-schema';

type CardsState = CardType[];

// Define action types
type Action =
  | { type: 'initialFetch'; cards: CardsState }
  | { type: 'added' }
  | { type: 'changed'; card: CardType };

// Create contexts
const CardsContext = createContext<CardsState | undefined>(undefined);
const CardsDispatchContext = createContext<Dispatch<Action> | undefined>(
  undefined
);

const initialCards: CardsState = [];

function cardsReducer(cards: CardsState, action: Action): CardsState {
  switch (action.type) {
    case 'initialFetch': {
      return [...action.cards];
    }
    case 'added': {
      return [
        ...cards,
        {
          id: crypto.randomUUID(),
          name: '',
          number: '',
          valid_thru: '',
          cvv: '',
          type: 'visa',
          status: 'active',
          card_details: {
            current_limit: 0,
            online_transactions: false,
            atm_withdrawals: false,
            atm_limit: 0,
          },
          transactions: [],
        },
      ];
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

  return (
    <CardsContext.Provider value={cards}>
      <CardsDispatchContext.Provider value={dispatch}>
        {children}
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
