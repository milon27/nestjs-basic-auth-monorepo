import { Module } from '@nestjs/common';
import { MyJwtService } from './jwt.service';

// @Global()
@Module({
  providers: [MyJwtService],
  exports: [MyJwtService]
})
export class MyJwtModule { }
