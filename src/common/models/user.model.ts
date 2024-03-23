import { prop } from "@typegoose/typegoose";
import { BaseModel } from "./base.model";
export class UserModel extends BaseModel {
  @prop()
  username: string;

  @prop()
  password: string;
}