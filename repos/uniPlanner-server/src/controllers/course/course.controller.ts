import { Body, Controller, Get, HttpException, HttpStatus, Logger, Param, Post } from '@nestjs/common';
import { Course } from 'src/models/couese.model';
import { MongoService } from 'src/services/mongo.service';

@Controller('api/courses')
export class CourseController {

    constructor(readonly mongoService: MongoService) {}

    @Post('saveCourse')
    async saveItemByCollection(@Body() course): Promise<string> {
        try {
            Logger.log('Post request to post course data to collection');
            await this.mongoService.saveItemByCollection("courses",  course);
            return `Course ${course.name} saved successfully`;
        } catch (error) {
            Logger.error(`Failed to post data, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('allCourses')
    async getAllcourses(): Promise<Course[]> {
        try {
            Logger.log('Got request to get all collection data');
            const courses: Course[] = await this.mongoService.getAllByCollection("courses") as any;
            return courses;
        } catch (error) {
            Logger.error(`Failed getting all courses data, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':course_number')
    async getCourseByNumber(@Param() params): Promise<Course[]> {
        try {
            Logger.log('Got request to get course data from collection');
            const courses: Course[] = await this.mongoService.getItemByCourseNumber("courses",params.course_number) as any;
            return courses;
        } catch (error) {
            Logger.error(`Failed getting course by number ${params.course_number}, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
