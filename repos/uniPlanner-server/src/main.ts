import { NestFactory } from '@nestjs/core';
import { MongoClient } from 'mongodb';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const uri = process.env.MOGODB_URI || "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    await client.db("uniplanner").command({ ping: 1 });
    console.log("Connected successfully to server");
  } catch (e) {
      console.error(e);
  } finally {
    await client.close();
  }

  await app.listen(3000);
}
bootstrap();
