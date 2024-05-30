export const CARD_TABS = [
  { label: 'My Debit Cards', value: 'my-cards' },
  { label: 'All Company Cards', value: 'company-cards' },
] as const;

export const CARD_ACTIONS = [
  {
    label: 'Freeze Card',
    iconPath: '/assets/images/icons/freeze.png',
    clickAction: 'freeze',
  },
  {
    label: 'Set Limit',
    iconPath: '/assets/images/icons/spend-limit.png',
    clickAction: 'set-limit',
  },
  {
    label: 'Add to GPay',
    iconPath: '/assets/images/icons/gpay.png',
    clickAction: 'gpay',
  },
  {
    label: 'Replace Card',
    iconPath: '/assets/images/icons/replace.png',
    clickAction: 'replace',
  },
  {
    label: 'Cancel Card',
    iconPath: '/assets/images/icons/cancel.png',
    clickAction: 'cancel',
  },
] as const;

export const CARD_DETAILS_OPTIONS = [
  {
    label: 'Card Details',
    iconPath: '/assets/images/icons/card-details.png',
    name: 'card-details',
  },
  {
    label: 'Recent Transactions',
    iconPath: '/assets/images/icons/recent-transactions.png',
    name: 'recent-transactions',
  },
] as const;

export const CARD_TYPES_MAP = {
  visa: {
    label: 'Visa',
    iconPath: '/assets/images/cards/visa.png',
    color: '#01D167',
  },
  mastercard: {
    label: 'Mastercard',
    iconPath: '/assets/images/cards/mastercard.png',
    color: '#F6AE2D',
  },
  amex: {
    label: 'American Express',
    iconPath: '/assets/images/cards/amex.png',
    color: '#536DFF',
  },
} as const;

export const VENDOR_TYPES = [
  'accessories',
  'flights',
  'subscriptions',
] as const;

export const TRANSACTION_TYPES = ['debit', 'credit'] as const;

export const CARD_STATUSES = ['active', 'inactive', 'cancelled'] as const;

export const VENDOR_TYPES_MAP = {
  flights: {
    label: 'Flights',
    iconPath: '/assets/images/icons/flights.png',
    color: '#00D6B51A',
  },
  subscriptions: {
    label: 'Subscriptions',
    iconPath: '/assets/images/icons/subscriptions.png',
    color: '#009DFF1A',
  },
  accessories: {
    label: 'Accessories',
    iconPath: '/assets/images/icons/accessories.png',
    color: '#F251951A',
  },
} as const;
