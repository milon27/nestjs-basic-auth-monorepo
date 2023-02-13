import { Controller, Get, UseGuards } from '@nestjs/common';
import { IJwtPayload } from '../jwt/interfaces/jwt.payload.interface';
import { CurrentUser } from './decorator/user.decorator';
import { AuthGuard } from './guard/auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    @UseGuards(AuthGuard)
    getCurrentUser(@CurrentUser() user: IJwtPayload) {
        return this.userService.getUserById(user.userId)
    }
}
