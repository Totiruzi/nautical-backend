import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models';
import { UsersRepository } from './repositories';
import { UsersResolver } from './resolvers';
import { UsersService } from './services';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    exports: [UsersService],
    providers: [UsersResolver, UsersService, UsersRepository],
})
export class UsersModule {}
