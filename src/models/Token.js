const mongoose = import("mongoose");

const TokenSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Token", TokenSchema);
