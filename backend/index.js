import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import morgan from "morgan";

import shipRouter from "./controller/ships.js";
import reservationRouter from "./controller/reservations.js";

await mongoose.connect(process.env.MONGODB_URI);

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
};

app.use(express());
app.use(morgan("tiny"));
app.use(cors(corsOptions));
app.use("/ships", shipRouter);
app.use("/reservations", reservationRouter);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
