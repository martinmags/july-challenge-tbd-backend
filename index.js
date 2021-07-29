"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dummy_data_1 = __importDefault(require("./src/scripts/dummy_data"));
const userRouter = require("./src/routes/userRouter");
require("dotenv").config();
const app = express_1.default();
const PORT = process.env.PORT || 4000;
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/user', userRouter);
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cloroxory.dei81.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.connect(uri, options);
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    dummy_data_1.default();
    console.warn("Database Connected!");
});
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
