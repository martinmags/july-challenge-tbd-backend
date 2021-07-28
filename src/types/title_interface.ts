import { Document, Model } from "mongoose";

export interface ITitle {
  title: string;
}
export interface ITitleDocument extends ITitle, Document {}
export interface ITitleModel extends Model<ITitleDocument> {}
