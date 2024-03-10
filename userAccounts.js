const mongoose = require('mongoose');//import the mongoose library to interact with DB

const userAccountsSchema = new mongoose.Schema({
    nickname:{
        type: String,
        unique: true,
        required: true //validation rule
      },
    email:{
        type: String,
        unique: true,
        required: true
      },
    password:{
        type: String,
        required: true
      },
    uCurrency: String,
    profilePhotoUrl: String,
    groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }]//ref: establishes a relationship between the User model and the Group model.
}, {collection:'UserAccount'}
);
module.exports = mongoose.model('UserAccount', userAccountsSchema);//schema "userProfileSchema" will be developed in our collection of users


const transactionsSchema = new mongoose.Schema({
  date: Date,
  tPayer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserAccount',
    required: true
  },
  tPayees:[{type:mongoose.Schema.Types.ObjectId, ref: 'UserAccount'}],
  tPayment: {
    amount: { type: Number, required: true },
    currencyF: { type: String, required: true },
  },
  split: {
        sType: Number,//1 - amount or 2 - %
        ratio: [{type:Number}]
        },
  tDebtors: [{
    debtorId: {type: mongoose.Schema.Types.ObjectId, ref: 'userAccount'},
    howMuch: Number
  }],
}, {collection:'Transaction'});
module.exports = mongoose.model('Transaction', transactionsSchema);

const groupsSchema = new mongoose.Schema({
  name: String,
  active: Boolean,
  groupCurrency: String,
  members:[{type:mongoose.Schema.Types.ObjectId, ref:'UserAccount'}],
  transactions:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'}],
  gDebts:[{
    gReceiver: {type: mongoose.Schema.Types.ObjectId, ref: 'UserAccount'},
    gDebtor: {type: mongoose.Schema.Types.ObjectId, ref: 'UserAccount'},
    gDebt: Number,
    gCurrencyTo: String,
    settledD: Boolean,
    settleDate: Date
}],
  totalSpent: Number
}, {collection: 'Group'}
);
module.exports = mongoose.model('Group', groupsSchema);
