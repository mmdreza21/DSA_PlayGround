import { config } from 'dotenv';
config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import path from 'path';

(async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.setGlobalPrefix('api');
  // app.use();
  app.enableCors({ origin: '*' });
  app.use(
    '/swagger-dark.css',
    express.static(path.join(__dirname, '..', 'public', 'swagger-dark.css')),
  );
  const options = new DocumentBuilder()
    .setTitle('this is documentation for api`s')
    .setDescription(
      'DSA_PlayGround is an interactive environment for exploring Data Structures and Algorithms ' +
        'implemented in TypeScript. Each API endpoint lets you test, run, and experiment with ' +
        'different DSA concepts — from basics to advanced — so you can learn, practice, and ' +
        'understand how they work.',
    )
    .setVersion('1.0.0')

    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document, {
    customCssUrl: '/swagger-dark.css',
  });

  await app.listen(8080);
})();
