import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import 'express-async-errors';
import authRouter from './router/auth.js'
import dayPlanRouter from './router/dayPlan.js'
import { db } from "./db/database.js";
const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

app.use('/auth', authRouter);
app.use('/dayPlan',dayPlanRouter)

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

db.getConnection();

app.listen(8080);