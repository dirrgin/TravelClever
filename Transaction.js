const mongoose = require("mongoose");
const UserAccount = require('./UserAccount.js');
const Transaction_tDebtorsSchema = {
      debtorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserAccount',
            required: true,
      },
      howMuch: Number,
  };
const transactionsSchema = new mongoose.Schema({
    date: {
          type: Date,
          default: Date.now
    },
    tPayer:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserAccount",
      required: true
    },
    tPayees:[
          {type:mongoose.Schema.Types.ObjectId, 
              ref: 'UserAccount'}
    ],
    tPayment: {
      amount: { type: Number, required: true },
      currencyF: { type: String, required: true },
    },
    split: {
          sType: {
                  type:Number,
                  enum: [1, 2],//1 - amount, 2 - percent
                  default: 1,
                  },
          ratio: [Number],
    },
    tDebtors: [Transaction_tDebtorsSchema],
  });
  const Transaction = mongoose.model("Transaction", transactionsSchema);

  module.exports = Transaction;
