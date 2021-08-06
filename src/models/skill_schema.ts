import { Schema } from "mongoose";
import { model } from "mongoose";
import { ISkillDocument } from "../types/skill_interface";

const SkillSchema = new Schema({
  skill: Array,
});
export default SkillSchema;
export const SkillModel = model<ISkillDocument>("skill", SkillSchema);
