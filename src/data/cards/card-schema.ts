import { z } from 'zod';

import {
  TRANSACTION_TYPES,
  CARD_STATUSES,
  CARD_TYPES_MAP,
  VENDOR_TYPES_MAP,
} from '~/components/cards/cards.constants';

type VendorTypeKey = keyof typeof VENDOR_TYPES_MAP;

export const transactionSchema = z.object({
  id: z.string(),
  vendor: z.string(),
  vendor_type: z.enum(Object.keys(VENDOR_TYPES_MAP) as [VendorTypeKey]),
  date: z.string(),
  amount: z.string(),
  type: z.enum(TRANSACTION_TYPES),
});

export const cardDetailsSchema = z.object({
  current_limit: z.number(),
  online_transactions: z.boolean(),
  atm_withdrawals: z.boolean(),
  atm_limit: z.number(),
});

type CardTypeKey = keyof typeof CARD_TYPES_MAP;

export const cardSchema = z.object({
  id: z.string(),
  name: z.string(),
  number: z.string(),
  valid_thru: z.string(),
  cvv: z.string(),
  status: z.enum(CARD_STATUSES),
  type: z.enum(Object.keys(CARD_TYPES_MAP) as [CardTypeKey]),
  card_details: cardDetailsSchema,
  transactions: z.array(transactionSchema),
});

export type TransactionType = z.infer<typeof transactionSchema>;
export type CardDetailsType = z.infer<typeof cardDetailsSchema>;
export type CardType = z.infer<typeof cardSchema>;
