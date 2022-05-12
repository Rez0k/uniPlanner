import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataController } from './controllers/data/data.controller';
import { MondayController } from './controllers/data/monday.controller';


@Module({
  imports: [],
  controllers: [AppController, DataController, MondayController],
  providers: [AppService],
import { MongoService } from './services/mongo.service';
import { UniversityController } from './controllers/university/university.controller';
import { CourseController } from './controllers/course/course.controller';
import { CurriculumController } from './controllers/curriculum/curriculum.controller';
import { UserController } from './controllers/user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, UniversityController, CourseController, CurriculumController, UserController],
  providers: [AppService, MongoService],
})
export class AppModule {}
