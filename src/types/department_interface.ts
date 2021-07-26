import { Document, Model } from "mongoose";

export interface IDepartment {
  dept: string;
}
export interface IDepartmentDocument extends IDepartment, Document {}
export interface IDepartmentModel extends Model<IDepartmentDocument> {}
