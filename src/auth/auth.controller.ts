import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/users/models/user.model';
import { AuthService } from './auth.service';
import { CurrentUser } from './current-user.decorator';
import { LocalAuthGard } from './guards/local-auth.gaurd';

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
