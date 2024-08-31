import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.get("/", (req, res) => {
  res.send("Hello from Server !!");
});

// Task 1 :

import userTransactions from "./controllers/usertransactions.controller.js";
app.get("/transactions/:useraddress", userTransactions);

// Task 2 :

import LatestEthereumPrice from "./utils/EthereumPrice.js";
LatestEthereumPrice();

// Task 3 :

import TotalExpenseAndEtherPrice from "./controllers/expensesAndetherprice.controller.js";
app.get("/expensesAndetherprice/:useraddress", TotalExpenseAndEtherPrice);

export { app };
