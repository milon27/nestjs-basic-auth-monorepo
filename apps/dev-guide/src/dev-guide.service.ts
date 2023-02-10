import { Injectable } from '@nestjs/common';

@Injectable()
export class DevGuideService {
  getHello(): string {
    return 'Hello World!';
  }
}
