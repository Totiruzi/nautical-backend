import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput, GetUserArgs } from '../dto';
import { User } from '../models';
import { UsersService } from '../services';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Mutation(() => User)
    async createUser(@Args('createUserData') createUserData: CreateUserInput) {
        return this.usersService.createUser(createUserData);
    }

    @Query(() => User, { name: 'user' })
    async getUser(@Args() getUserArgs: GetUserArgs) {
        return this.usersService.getUser(getUserArgs);
    }
}
