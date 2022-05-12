import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const {MongoClient} = require('mongodb');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const uri = "mongodb+srv://uniplanner:onDKVYICf0o1RsQq@cluster0.ifbdh.mongodb.net/uniplanner?retryWrites=true&w=majority&socketTimeoutMS=90000";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    await client.db("uniplanner").command({ ping: 1 });
    console.log("Connected successfully to server");

    //const databases = await client.db().admin().databases.forEach(db => console.log(` - ${db.name}`));
 
    //console.log(`Databases: ${databases}`);
 
  } catch (e) {
      console.error(e);
  } finally {
    await client.close();
  }

  await app.listen(3000);
}
bootstrap();
