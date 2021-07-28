import { Document, Model } from "mongoose";

export interface IUser {
  first_name: string;
  last_name: string;
  dept_id: string;
  title_id: string;
  skill_id: string;
}
export interface IUserDocument extends IUser, Document {}
export interface IUserModel extends Model<IUserDocument> {}
