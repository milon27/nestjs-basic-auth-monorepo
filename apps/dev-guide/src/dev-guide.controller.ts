import { Controller, Get } from '@nestjs/common';
import { DevGuideService } from './dev-guide.service';

@Controller()
export class DevGuideController {
  constructor(private readonly devGuideService: DevGuideService) {}

  @Get()
  getHello(): string {
    return this.devGuideService.getHello();
  }
}
