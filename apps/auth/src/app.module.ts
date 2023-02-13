import { PrismaModule } from '@app/prisma';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RegisterModule } from './register/register.module';
import { MyJwtModule } from './jwt/jwt.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, RegisterModule, MyJwtModule, LoginModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
