// Libraries
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { faker } from '@faker-js/faker';
import { capitalizeString } from '~/lib/utils';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import {
  CARD_TYPES_MAP,
  VENDOR_TYPES_MAP,
  TRANSACTION_TYPES,
} from '~/components/cards/cards.constants';

function getRandomCardValidity() {
  const randomDate = faker.date.future({ years: 10 });

  const month = String(randomDate.getUTCMonth() + 1).padStart(2, '0');
  const year = String(randomDate.getUTCFullYear()).slice(-2);

  return `${month}/${year}`;
}

function getRandomCardDetails() {
  return {
    current_limit: faker.number.int({ min: 1100, max: 80000 }),
    online_transactions: faker.datatype.boolean(),
    atm_withdrawals: faker.datatype.boolean(),
    atm_limit: faker.number.int({ min: 1100, max: 40000 }),
  };
}

function getRandomTransactions() {
  const transactions = Array.from({ length: 8 }, () => ({
    id: crypto.randomUUID(),
    // vendor: faker.company.name(), // this doesn't create good company names,
    // I prefer below method although it's only slightly better
    vendor: `${capitalizeString(faker.lorem.words({ min: 1, max: 2 }))} ${faker.company.name().split(' ').slice(-1).join('')}`,
    vendor_type: faker.helpers.arrayElement(Object.keys(VENDOR_TYPES_MAP)),
    date: faker.date.past({ years: 1 }).toLocaleDateString(),
    amount: faker.commerce.price({ min: 10, max: 800, dec: 0 }),
    type: faker.helpers.arrayElement(TRANSACTION_TYPES),
  }));

  return transactions;
}

function getRandomCards() {
  const cards = Array.from({ length: 5 }, () => ({
    id: crypto.randomUUID(),
    name: faker.person.fullName(),
    number: faker.finance.creditCardNumber({ issuer: '################' }),
    valid_thru: getRandomCardValidity(),
    cvv: faker.finance.creditCardCVV(),
    status: 'active',
    type: faker.helpers.arrayElement(Object.keys(CARD_TYPES_MAP)),
    card_details: getRandomCardDetails(),
    transactions: getRandomTransactions(),
  }));

  return cards;
}

const myCards = getRandomCards();

const companyCards = getRandomCards();

fs.writeFileSync(
  path.join(__dirname, 'my-cards.json'),
  JSON.stringify(myCards, null, 2)
);

fs.writeFileSync(
  path.join(__dirname, 'company-cards.json'),
  JSON.stringify(companyCards, null, 2)
);

console.log('✅ Cards data generated.');
