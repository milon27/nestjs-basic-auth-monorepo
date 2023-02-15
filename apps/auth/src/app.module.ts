import { KafkaModule } from '@app/kafka';
import { PrismaModule } from '@app/prisma';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MyJwtModule } from './jwt/jwt.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, KafkaModule, RegisterModule, MyJwtModule, LoginModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
