import { Injectable } from '@nestjs/common';
import { BaseService } from '../services/base.services';
import { UserModel } from '../models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { AnyParamConstructor } from "@typegoose/typegoose/lib/types";


@Injectable()
export class AuthService extends BaseService<UserModel> {
  constructor(
  @InjectModel(UserModel.modelName)
  model:ReturnModelType<AnyParamConstructor< UserModel>>
  ){
  super(model)
  }

}
