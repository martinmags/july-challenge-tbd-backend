import { Schema } from "mongoose";
import { model } from "mongoose";
import { ITitleDocument } from "../types/title_interface";

const TitleSchema = new Schema({
  title: String,
});
export default TitleSchema;
export const TitleModel = model<ITitleDocument>("title", TitleSchema);
