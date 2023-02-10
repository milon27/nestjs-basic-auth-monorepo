import { NestFactory } from '@nestjs/core';
import { DevGuideModule } from './dev-guide.module';

async function bootstrap() {
  const app = await NestFactory.create(DevGuideModule);
  await app.listen(3000);
}
bootstrap();
