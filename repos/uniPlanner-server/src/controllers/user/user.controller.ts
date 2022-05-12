import { Controller, Get, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { MongoService } from 'src/services/mongo.service';

@Controller('api/users')
export class UserController {
    constructor(readonly mongoService: MongoService) {}

    @Get('user')
    getCourseById(): User {
        try {
            Logger.log('Got request to get data');
            return { id: 'asd', username: 'yoarm', password: '1234' };
        } catch (error) {
            Logger.error(`Failed getting course by id, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
