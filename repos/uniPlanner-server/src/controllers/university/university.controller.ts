import { Controller } from '@nestjs/common';
import { MongoService } from 'src/services/mongo.service';
import { Body, Get, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { University } from 'src/models/university.model';


@Controller('university')
export class UniversityController {
    constructor(readonly mongoService: MongoService) {}

    @Get('alluniversities')
    async getAlluniversities(): Promise<University[]> {
        try {
            Logger.log('Got request to get all collection data');
            const university: University[] = await this.mongoService.getAllByCollection("university") as any;
            return university;
        } catch (error) {
            Logger.error(`Failed getting university collection data, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
