import { KafkaModule } from '@app/kafka';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DevGuideController } from './dev-guide.controller';
import { DevGuideService } from './dev-guide.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), KafkaModule],
  controllers: [DevGuideController],
  providers: [DevGuideService],
})
export class DevGuideModule { }
