import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// const app = NestFactory.create(AppModule);

// console.log("XXXXX")
// module.exports = app;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
