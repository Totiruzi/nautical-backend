import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { UserSchema } from './models/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema}])
  ],
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
