import { Module } from '@nestjs/common';
import { DevGuideController } from './dev-guide.controller';
import { DevGuideService } from './dev-guide.service';

@Module({
  imports: [],
  controllers: [DevGuideController],
  providers: [DevGuideService],
})
export class DevGuideModule {}
