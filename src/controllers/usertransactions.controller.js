import { Usertransactions } from "../models/usertransactions.model.js";
import axios from "axios";

const userTransactions = async (req, res) => {
  const address = req.params.useraddress;

  try {
    const transactions = await fetchUserTransactions(address);
    await storeUserTransactions(address, transactions);
    res.send(transactions);
  } catch (error) {
    console.error("Error processing request:", error);
    res
      .status(500)
      .send("An error occurred while processing the transactions.");
  }
};

async function storeUserTransactions(address, transactions) {
  try {
    const result = await Usertransactions.findOneAndUpdate(
      { userAddress: address },
      { transactions: transactions },
      { new: true, upsert: true }
    );

    console.log("Transactions stored successfully!", result);
  } catch (error) {
    console.error("Error storing transactions:", error);
    throw error;
  }
}

async function fetchUserTransactions(address) {
  const apiUrl = "https://api.etherscan.io/api";

  try {
    const response = await axios.get(apiUrl, {
      params: {
        module: "account",
        action: "txlist",
        address: address,
        startblock: 0,
        endblock: 99999999,
        page: 1,
        offset: 10,
        sort: "asc",
        apikey: process.env.API_KEY,
      },
    });

    return response.data.result;
  } catch (error) {
    console.error("Error in fetching User Transactions : ", error.message);
    return null;
  }
}

export default userTransactions;
