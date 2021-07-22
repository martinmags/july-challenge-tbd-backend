import { Schema } from "mongoose";
import { model } from "mongoose";
import { IUserDocument } from "./types/user_interface";

const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  dept_id: String,
  title_id: String,
  skill_id: String,
});
export default UserSchema;
export const UserModel = model<IUserDocument>("user", UserSchema);
