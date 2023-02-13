import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { MyJwtService } from '../jwt/jwt.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class RegisterService {
    constructor(private readonly prisma: PrismaService, private readonly jwt: MyJwtService) { }

    async signUp(registerDto: RegisterDto) {
        const user = await this.prisma.user.create({
            data: {
                email: registerDto.email, name: registerDto.name
            }
        })
        // get+send token
        const token = this.jwt.generateToken({ userId: user.id })
        //TODO: send token in http cookie with no expire
        return { ...user, token }
    }
}
