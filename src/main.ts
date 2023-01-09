import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { DocumentBuilder } from '@nestjs/swagger/dist';
import { ValidationPipe } from '@nestjs/common';
import { ConfigureApp } from './AppConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  ConfigureApp(app)
  
  await app.listen(3000);
}
bootstrap();
