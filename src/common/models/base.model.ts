import { buildSchema, prop, getModelForClass } from "@typegoose/typegoose";
import { Schema } from "mongoose";

export abstract class BaseModel{
  @prop({timeStamp: true})
  createdAt?: Date;

  @prop({timeStamp: true})
  updateAt?: Date

  id:string

  static get modelName():string{
   return this.name;
  }
  
  static get Model():string{
    return getModelForClass(this as any)
  }

  static get schema():Schema{
    return buildSchema(this as any,{
     schemaOptions:{
      timestamps:true,
      toJSON:{
        getters:true,
        virtuals:true,
      }
     }
    })
  }

}