import { Schema } from "mongoose";
import { model } from "mongoose";
import { ISkillDocument } from "../types/skill_interface";

const SkillSchema = new Schema({
  skill: String,
});
export default SkillSchema;
export const SkillModel = model<ISkillDocument>("skill", SkillSchema);
