//import Realm from "realm";

export const GroupSchema = {
  name: 'Group',
  properties: {
    _id: 'objectId',
    active: 'bool',
    gDebts: 'Group_gDebts[]',
    groupCurrency: 'string',
    members: 'UserAccount[]',
    name: 'string',
    totalSpent: 'double?',
    transactions: 'string[]',
  },
  primaryKey: '_id',
};

export const Group_gDebtsSchema = {
  name: 'Group_gDebts',
  embedded: true,
  properties: {
    gCurrencyTo: 'string?',
    gDebt: 'double?',
    gDebtor: 'UserAccount',
    gReceiver: 'UserAccount',
    settledD: 'bool?',
  },
};

export const ItemSchema = {
  name: 'Item',
  properties: {
    _id: 'objectId',
    isComplete: 'bool',
    owner_id: 'string',
    summary: 'string',
  },
  primaryKey: '_id',
};

export const TransactionSchema = {
  name: 'Transaction',
  properties: {
    _id: 'objectId',
    date: 'date?',
    split: 'Transaction_split',
    tDebtors: 'Transaction_tDebtors[]',
    tPayee: 'UserAccount[]',
    tPayer: 'UserAccount[]',
    tPayment: 'Transaction_tPayment',
  },
  primaryKey: '_id',
};

export const Transaction_splitSchema = {
  name: 'Transaction_split',
  embedded: true,
  properties: {
    ratio: 'double[]',
    sType: 'string?',
  },
};

export const Transaction_tDebtorsSchema = {
  name: 'Transaction_tDebtors',
  embedded: true,
  properties: {
    debtorId: 'UserAccount',
    howMuch: 'double?',
  },
};

export const Transaction_tPaymentSchema = {
  name: 'Transaction_tPayment',
  embedded: true,
  properties: {
    amount: 'double?',
    currencyF: 'string?',
  },
};

export const UserAccountSchema = {
  name: 'UserAccount',
  properties: {
    _id: 'objectId',
    email: 'string',
    groups: 'string[]',
    nickname: 'string',
    password: 'string',
    profilePhotoUrl: 'string?',
    uCurrency: 'string?',
  },
  primaryKey: '_id',
};
