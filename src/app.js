import express from "express";
import cors from "cors";
import userTransaction from "./controllers/usertransactions.controller.js";

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

export { app };
