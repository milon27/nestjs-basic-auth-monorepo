import { Module } from '@nestjs/common';
import { JwtModule } from '../jwt/jwt.module';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports: [JwtModule],
  controllers: [RegisterController],
  providers: [RegisterService]
})
export class RegisterModule { }
