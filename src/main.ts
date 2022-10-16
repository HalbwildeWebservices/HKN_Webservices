import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerUserApiConfig = new DocumentBuilder()
    .setTitle('HKN user API')
    .setDescription('The HKN user management REST API')
    .addTag('users')
    .addTag('auth')
    .setVersion('0.1')
    .build();
  const swaggerUserDoc = SwaggerModule.createDocument(app, swaggerUserApiConfig);
  SwaggerModule.setup('userapi', app, swaggerUserDoc);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
