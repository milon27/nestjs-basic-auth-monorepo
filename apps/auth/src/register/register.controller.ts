import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService: RegisterService) { }

    @Post()
    async signUp(@Body() registerDto: RegisterDto) {
        return await this.registerService.signUp(registerDto)
    }
}
