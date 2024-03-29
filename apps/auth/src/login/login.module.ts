import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { MyJwtModule } from '../jwt/jwt.module';

@Module({
  imports: [MyJwtModule],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule { }
