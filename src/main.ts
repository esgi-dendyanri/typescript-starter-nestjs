import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const app = NestFactory.create(AppModule);

console.log("XXXXX")
module.exports = app;
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
