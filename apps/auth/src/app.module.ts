import { PrismaModule } from '@app/prisma';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RegisterModule } from './register/register.module';
import { JwtModule } from './jwt/jwt.module';

@Module({
  imports: [PrismaModule, RegisterModule, JwtModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
