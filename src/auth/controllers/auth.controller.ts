import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { User } from '@/users';
import { CurrentUser } from '../decorators';
import { LocalAuthGard } from '../guards';
import { AuthService } from '../services';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @UseGuards(LocalAuthGard)
    @Post('login')
    async login(@CurrentUser() user: User, @Res({ passthrough: true }) response: Response) {
        await this.authService.login(user, response);
        response.send(user);
    }
}
