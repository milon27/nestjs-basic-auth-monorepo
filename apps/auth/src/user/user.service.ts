import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { MyJwtService } from '../jwt/jwt.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService, private jwt: MyJwtService) { }

    getUserById(userId: string) {
        const user = this.prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        return user
    }
}
