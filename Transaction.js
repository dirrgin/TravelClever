const mongoose = require("mongoose");
const UserAccount = require('./UserAccount.js');
const Transaction_tDebtorsSchema = {
      debtorId: {type: mongoose.Schema.Types.ObjectId, ref: 'UserAccount',
      required: true,},
      howMuch: Number,
  };
const transactionsSchema = new mongoose.Schema({
    date: Date,
    tPayer:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAccount",
      required: true
    },
    tPayees:[{type:mongoose.Schema.Types.ObjectId, 
        ref: 'UserAccount'}],
    tPayment: {
      amount: { type: Number, required: true },
      currencyF: { type: String, required: true },
    },
    split: {
          sType: {type:Number, required: true,},//1 - amount or 2 - %
          ratio: [{type:Number, required: true,}]
          },
    tDebtors: [Transaction_tDebtorsSchema],
  });
  const Transaction = mongoose.model("Transaction", transactionsSchema);

  module.exports = Transaction;
