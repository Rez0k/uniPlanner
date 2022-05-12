import { Controller, Get } from '@nestjs/common';

@Controller('api/course')
export class CourseController {
  @Get('key')
  getCourseById(): string {
    return 'Uriel the fag';
  }
}
