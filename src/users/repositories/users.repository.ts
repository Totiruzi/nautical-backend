import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '@/database';
import { User, UserDocument } from '../models';

@Injectable()
export class UsersRepository extends AbstractRepository<UserDocument> {
    protected readonly logger = new Logger(UsersRepository.name);
    constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
        super(userModel);
        this.logger = new Logger(UsersRepository.name);
    }
}
