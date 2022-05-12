import { NestFactory } from '@nestjs/core';
import { MongoClient } from 'mongodb';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  var mongoose = require("mongoose");
  mongoose.Promise = global.Promise;
  mongoose.connect("mongodb://localhost:27017/uniplanner");

  await app.listen(3000);
}
bootstrap();
