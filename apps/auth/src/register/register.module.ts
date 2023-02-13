import { Module } from '@nestjs/common';
import { MyJwtModule } from '../jwt/jwt.module';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports: [MyJwtModule],
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule { }
