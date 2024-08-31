import { EthereumPrice } from "./models/ethereumprice.model.js";
import axios from "axios";

const LatestEthereumPrice = () => {
  setInterval(fetchAndStoreEthereumPrice, 600000);
};

async function fetchAndStoreEthereumPrice() {
  const ethereumPrice = await fetchLatestEthereumPrice();
  console.log("Data fetched successfully:", ethereumPrice);
  await updateEthereumPrice(ethereumPrice);
}

async function fetchLatestEthereumPrice() {
  const apiUrl =
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr";

  try {
    const response = await axios.get(apiUrl);
    return response.data.ethereum.inr;
  } catch (error) {
    console.error("Error fetching Ethereum price:", error);
    return null;
  }
}

async function updateEthereumPrice(ethereumPrice) {
  try {
    await EthereumPrice.findOneAndUpdate(
      {},
      { PriceInINR: ethereumPrice },
      { new: true, upsert: true }
    );
    console.log("Price stored in database successfully!");
  } catch (error) {
    console.error("Error storing Ethereum price in database:", error);
    throw error;
  }
}

export default LatestEthereumPrice;
