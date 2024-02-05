import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  // Serve static files from the React application's public directory
  app.useStaticAssets(join(__dirname, '..', '..', 'my-mui-app', 'public'));

  // Handle all other requests by serving the index.html file
  app.use('*', (_, res) => {
    res.sendFile(join(__dirname, '..', '..', 'my-mui-app', 'public', 'index.html'));
  });

  await app.listen(3001);
}
bootstrap();
