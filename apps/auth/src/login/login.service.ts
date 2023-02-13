import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';
import { JwtService } from '../jwt/jwt.service';
import { LoginWithEmailDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  constructor(private readonly prisma: PrismaService, private readonly jwt: JwtService) { }

  async loginWithEmail(data: LoginWithEmailDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email
      }
    })
    if (!user) {
      throw new Error(`No User Found with ${data.email}!`)
    }

    // get+send token
    const token = this.jwt.generateToken({ userId: user.id })
    //TODO: send token in http cookie with no expire
    return { ...user, token }
  }

}
