const mongoose = require('mongoose');//import the mongoose library to interact with DB
const Transaction = require('./Transaction.js');
const Group = require('./Group.js');

const userAccountsSchema = new mongoose.Schema({
  _id: {
    type: objectId,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePhotoUrl: {type: String},
  uCurrency: String,
  groups: {
    type: [mongoose.SchemaTypes.objectId],
    ref: "Group",
  },
  transactions: {
    type: [mongoose.SchemaTypes.objectId],
    ref: "Transaction",
  }
});
const UserAccount = mongoose.model('UserAccount', userAccountsSchema);
module.exports = UserAccount;
