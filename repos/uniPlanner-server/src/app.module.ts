import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoService } from './services/mongo.service';
import { UniversityController } from './controllers/university/university.controller';
import { CourseController } from './controllers/course/course.controller';
import { CurriculumController } from './controllers/curriculum/curriculum.controller';

@Module({
  imports: [],
  controllers: [AppController, UniversityController, CourseController, CurriculumController],
  providers: [AppService, MongoService],
})
export class AppModule {}
