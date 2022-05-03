import { Injectable } from '@nestjs/common';
import { GetUserArgs } from './dto/args/get-user-args.dto';
import { CreateUserInput } from './dto/input/create-user-input.dto';

@Injectable()
export class UsersService {

  async createUser(createUserData: CreateUserInput) {}

  async getUser(getUserArgs: GetUserArgs) {}
}
