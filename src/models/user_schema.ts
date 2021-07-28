import { Schema } from "mongoose";
import { model } from "mongoose";
import { IUserDocument } from "../types/user_interface";

const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  dept: String,
  title: String,
  skill: String,
});
export default UserSchema;
export const UserModel = model<IUserDocument>("user", UserSchema);
