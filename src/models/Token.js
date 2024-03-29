const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
  },
  name: {
    type: String,
  },
  spend: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Token", TokenSchema);
