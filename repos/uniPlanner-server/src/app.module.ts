import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataController } from './controllers/data/data.controller';
import { MondayController } from './controllers/data/monday.controller';


@Module({
  imports: [],
  controllers: [AppController, DataController, MondayController],
  providers: [AppService],
})
export class AppModule {}
