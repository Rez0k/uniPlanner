import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataController } from './controllers/data/data.controller';
import { CourseController } from './course/course.controller';
import { CurriculumController } from './curriculum/curriculum.controller';
import { UniversityController } from './university/university.controller';

@Module({
  imports: [],
  controllers: [AppController, DataController, CourseController, CurriculumController, UniversityController],
  providers: [AppService],
})
export class AppModule {}
