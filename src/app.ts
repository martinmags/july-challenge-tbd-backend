import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import connect from "./scripts/dummy_data";

require("dotenv").config();

const app: Express = express();
const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cloroxory.dei81.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(uri, options);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  connect();
  console.warn("Database Connected!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
