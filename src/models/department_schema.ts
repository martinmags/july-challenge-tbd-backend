import { Schema } from "mongoose";
import { model } from "mongoose";
import { IDepartmentDocument } from "../types/department_interface";

const DepartmentSchema = new Schema({
  dept: String,
});
export default DepartmentSchema;
export const DepartmemtModel = model<IDepartmentDocument>(
  "department",
  DepartmentSchema
);
