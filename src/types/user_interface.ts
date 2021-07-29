import { Document, Model } from "mongoose";

export interface IUser {
  first_name: string;
  last_name: string;
  dept: string;
  title: string;
  skill: string;
}
export interface IUserDocument extends IUser, Document {}
export interface IUserModel extends Model<IUserDocument> {}
