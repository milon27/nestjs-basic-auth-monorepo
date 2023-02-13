import { Module } from '@nestjs/common';
import { JwtModule } from '../jwt/jwt.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [JwtModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
