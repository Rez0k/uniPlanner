import { Controller, Get } from '@nestjs/common';
import { MongoService } from 'src/services/mongo.service';

@Controller('api/courses')
export class CourseController {

    constructor(readonly mongoService: MongoService) {}

    @Get('key')
    getCourseById(): string {
        
        return 'Uriel the fag';
    }
}
