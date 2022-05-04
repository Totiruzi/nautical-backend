import { Inject, Injectable, Logger } from "@nestjs/common";
import { Model } from "mongoose";
import { AbstractRepository } from "src/database/abstract.repository";
import { User } from "./models/user.model";
import { UserDocument } from "./models/user.schema";

@Injectable()
export class UsersRepository extends AbstractRepository<UserDocument>{
  protected readonly logger: Logger;
  constructor (@Inject(User.name) userModel: Model<UserDocument>){
    super(userModel);
    this.logger = new Logger(UsersRepository.name);
  }
}