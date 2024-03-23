import { Injectable } from "@nestjs/common";
import { BaseModel } from "../models/base.model";
import { read } from "fs";
import { ReturnModelType } from "@typegoose/typegoose";
import { AnyParamConstructor } from "@typegoose/typegoose/lib/types";

@Injectable()
export abstract class BaseService  <T extends BaseModel> {
 protected model:ReturnModelType<AnyParamConstructor<T>>;
 protected constructor(model:ReturnModelType<AnyParamConstructor<T>>){
  this.model = model;
 }   

 async findById(id:string):Promise<T | null>{
  return await this.model.findById(id);
}

async findByEmail(email:any):Promise<T | null>{
  return await this.model.findOne({email:email});
}

async updateById(id:string){
 return await this.model.findByIdAndUpdate(id).exex();
}
}