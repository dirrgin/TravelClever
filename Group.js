const mongoose = require('mongoose');
const UserAccount = require('./UserAccount.js');
const Transaction = require('./Transaction.js');

const Group_gDebtsSchema = {
      gCurrencyTo: String,
      gDebt: Number,
      gDebtor: {
        type: [mongoose.Schema.Types.objectId],
        ref: "UserAccount", },
      gReceiver: {
        type: mongoose.Schema.Types.objectId,
        ref: "UserAccount",
    },
      settledD: {type: Boolean, required: true,},
  };

const  GroupSchema = new mongoose.Schema({
    active: {
        type: Boolean,
        required: true,
    },
    gDebts: [Group_gDebtsSchema],
    members: {
        type: [mongoose.Schema.Types.objectId],
        ref: "UserAccount",
        required: true
    },
    name:  {
        type: String,
        required: true,
      },
    totalSpent: {
        type: Number,
        required: true,
    },
    transactions: {
        type: [mongoose.Schema.Types.objectId],
        ref: "Transaction",
    },
});
const Group =  mongoose.model('Group', GroupSchema);
module.exports = Group;
