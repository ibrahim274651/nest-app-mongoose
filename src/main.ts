/* eslint-disable prettier/prettier */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import mongoose from 'mongoose';

async function bootstrap() {
  const PORT = process.env.PORT || 9000;
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('Ibrahim App')
    .setDescription('Learning nestJs')
    .setVersion('1.0')
    .addServer('http://127.0.0.1:9000', 'Local environment')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/ibrahim-app', app, document);

  mongoose.set('strictPopulate', false);

  await app.listen(PORT);
}
bootstrap();
