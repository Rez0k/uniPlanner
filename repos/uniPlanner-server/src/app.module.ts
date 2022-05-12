import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataController } from './controllers/data/data.controller';
import { MongoService } from './services/mongo.service';

@Module({
  imports: [],
  controllers: [AppController, DataController],
  providers: [AppService, MongoService],
})
export class AppModule {}
