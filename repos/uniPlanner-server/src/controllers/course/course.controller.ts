import { Controller, Get, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { MongoService } from 'src/services/mongo.service';

@Controller('api/courses')
export class CourseController {

    constructor(readonly mongoService: MongoService) {}

    @Get('key')
    getCourseById(): string {
        try {
            Logger.log('Got request to get data');
            this.mongoService.saveItemByCollection('course', {});
            return 'Uriel the fag';
        } catch (error) {
            Logger.error(`Failed getting course by id, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
