import { Controller, Get, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Course } from 'src/models/couese.model';
import { MongoService } from 'src/services/mongo.service';

@Controller('api/courses')
export class CourseController {

    constructor(readonly mongoService: MongoService) {}

    @Get('course')
    getCourseById(): Course {
        try {
            Logger.log('Got request to get data');
            this.mongoService.saveItemByCollection("courses",  {
                name: "Lovely Loft",
                summary: "A charming loft in Paris",
                bedrooms: 1,
                bathrooms: 1
            });
            return  { id: 'sd', name: 'eran', status: 'In progress' };
        } catch (error) {
            Logger.error(`Failed getting course by id, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
