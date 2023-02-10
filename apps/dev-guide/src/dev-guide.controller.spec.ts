import { Test, TestingModule } from '@nestjs/testing';
import { DevGuideController } from './dev-guide.controller';
import { DevGuideService } from './dev-guide.service';

describe('DevGuideController', () => {
  let devGuideController: DevGuideController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DevGuideController],
      providers: [DevGuideService],
    }).compile();

    devGuideController = app.get<DevGuideController>(DevGuideController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(devGuideController.getHello()).toBe('Hello World!');
    });
  });
});
