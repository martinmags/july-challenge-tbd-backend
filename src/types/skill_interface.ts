import { Document, Model } from "mongoose";

export interface ISkill {
  skill: string;
}
export interface ISkillDocument extends ISkill, Document {}
export interface ISkillModel extends Model<ISkillDocument> {}
