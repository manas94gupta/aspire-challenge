// Libraries
import { faker } from '@faker-js/faker';

// Constants
import { CARD_TYPES_MAP } from '~/components/cards/cards.constants';

function getRandomPayCardValidity() {
  const randomDate = faker.date.future({ years: 10 });

  const month = String(randomDate.getUTCMonth() + 1).padStart(2, '0');
  const year = String(randomDate.getUTCFullYear()).slice(-2);

  return `${month}/${year}`;
}

function getRandomPayCardDetails() {
  return {
    current_limit: faker.number.int({ min: 1100, max: 80000 }),
    online_transactions: faker.datatype.boolean(),
    atm_withdrawals: faker.datatype.boolean(),
    atm_limit: faker.number.int({ min: 1100, max: 40000 }),
  };
}

import {
  type CardType,
  CardStatusType,
  CardTypeType,
} from '~/data/cards/card-schema';

export function getRandomPayCard(): CardType {
  const card = {
    id: crypto.randomUUID(),
    name: faker.person.fullName(),
    number: faker.finance.creditCardNumber({ issuer: '################' }),
    valid_thru: getRandomPayCardValidity(),
    cvv: faker.finance.creditCardCVV(),
    status: 'active' as CardStatusType,
    type: faker.helpers.arrayElement(
      Object.keys(CARD_TYPES_MAP)
    ) as CardTypeType,
    card_details: getRandomPayCardDetails(),
    transactions: [],
  };

  return card;
}
