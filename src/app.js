import express from "express";
import cors from "cors";

import userTransaction from "./controllers/usertransactions.controller.js";
import LatestEthereumPrice from "./utils/EthereumPrice.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

// Task 1 :

app.get("/transactions/:useraddress", userTransaction);

// Task 2 :

LatestEthereumPrice();

export { app };
