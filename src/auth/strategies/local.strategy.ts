import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly usersService: UsersService) {
        super({ userNameField: 'email' });
    }

    async validate(email: string, password: string) {
        const user = await this.usersService.validateUser(email, password);
        return user;
    }
}
