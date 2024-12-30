const mongoose = require('mongoose');
const { Schema } = mongoose;

const IncomeSchema = new Schema({
  amount:{
    type: Number,
    required: true,
    trim: true
  },
  date:{
    type: Date,
    trim: true,
    default: Date.now
  },
});

module.exports = mongoose.model('Income', IncomeSchema);