import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoService } from './services/mongo.service';
import { UniversityController } from './controllers/university/university.controller';
import { CourseController } from './controllers/course/course.controller';
import { CurriculumController } from './controllers/curriculum/curriculum.controller';
import { UserController } from './controllers/user/user.controller';
import { MondayController } from './services/monday.controller';

@Module({
  imports: [],
  controllers: [AppController, UniversityController, CourseController, CurriculumController, UserController, MondayController],
  providers: [AppService, MongoService],
})
export class AppModule {}
