import { Usertransactions } from "../models/usertransactions.model.js";
import { EthereumPrice } from "../models/ethereumprice.model.js";

const TotalExpenseAndEtherPrice = async (req, res) => {
  const Address = req.params.useraddress;

  const EtherPrice = await EthereumPrice.findOne({});

  const expenses = await Usertransactions.findOne({
    userAddress: Address,
  });

  let totalExpense = 0;

  for (let i = 0; i < expenses.transactions.length; i++) {
    const gasUsed = expenses.transactions[i].gasUsed;
    const gasPrice = expenses.transactions[i].gasPrice;

    totalExpense += (gasUsed * gasPrice) / 1e18;
  }

  const TotalExpenseAndCurrentEtherPrice = {
    TotalExpense: totalExpense,
    CurrentEtherPrice: EtherPrice.PriceInINR,
  };
  res.json(TotalExpenseAndCurrentEtherPrice);
};

export default TotalExpenseAndEtherPrice;
