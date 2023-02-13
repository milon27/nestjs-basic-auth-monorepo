import { Module } from '@nestjs/common';
import { MyJwtModule } from '../jwt/jwt.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [MyJwtModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
