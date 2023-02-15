import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const globalPrefix = 'api/auth';
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    // origin: ['http://localhost:3001', 'http://localhost:9000'],
    origin: true
  })
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))

  app.setGlobalPrefix(globalPrefix);
  const port = process.env.AUTH_PORT || 2727
  await app.listen(port, () => {
    console.log(`Auth running on port ${port}`);
  });
}
bootstrap();
