const mongoose = require('mongoose');//import the mongoose library to interact with DB
const Transaction = require('./Transaction.js');
const Group = require('./Group.js');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userAccountsSchema = new mongoose.Schema({
  _id: {
    type: objectId,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: 'Email address is required',
    trim: true,
    unique: true,
     validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  nickname: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        return value.length >= 1 && value.length <= 30;
      }, message: 'Nickname must be between 1 and 30 characters long'
    } 
  },
  password: {
    type: String,
    trim: true,// Trims leading and trailing whitespace
    required: true,
    validate: {
      validator: function(value) {
        return value.length >= 8 && value.length <= 30;
      }, message: 'Password must be between 8 and 30 characters long'
    } 
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
