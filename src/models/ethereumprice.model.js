import mongoose from "mongoose";

const EthereumPriceSchema = new mongoose.Schema(
  {
    PriceInINR: {
      type: Number,
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

export const EthereumPrice = mongoose.model(
  "EthereumPrice",
  EthereumPriceSchema
);
