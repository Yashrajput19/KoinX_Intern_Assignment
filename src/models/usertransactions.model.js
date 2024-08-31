import mongoose from "mongoose";

const usertransactionSchema = new mongoose.Schema(
  {
    userAddress: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    transactions: [
      {
        blockNumber: { type: Number, required: true },
        blockHash: { type: String, required: true },
        timeStamp: { type: String, required: true },
        hash: { type: String, required: true },
        nonce: { type: Number, required: true },
        transactionIndex: { type: Number, required: true },
        from: { type: String, required: true },
        to: { type: String, required: true },
        value: { type: Number, required: true },
        gas: { type: Number, required: true },
        gasPrice: { type: Number, required: true },
        input: { type: String, required: true },
        methodId: { type: String, required: true },
        functionName: { type: String, required: false },
        contractAddress: { type: String, required: false },
        cumulativeGasUsed: { type: Number, required: true },
        txreceipt_status: { type: String, required: true },
        gasUsed: { type: Number, required: true },
        confirmations: { type: String, required: true },
        isError: { type: Boolean, required: true },
      },
    ],
  },
  { timestamps: true }
);

export const Usertransactions = mongoose.model(
  "Usertransactions",
  usertransactionSchema
);
