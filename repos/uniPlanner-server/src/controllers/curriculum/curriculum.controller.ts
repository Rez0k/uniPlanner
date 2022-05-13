import { Body, Controller, Get, HttpException, HttpStatus, Logger, Param, Post, Put } from '@nestjs/common';
import { Curriculum } from 'src/models/curriculum.model';
import { User } from 'src/models/user.model';
import { MongoService } from 'src/services/mongo.service';

@Controller('api/curriculum')
export class CurriculumController {

    constructor(readonly mongoService: MongoService) {}

    @Post('saveCurriculum')
    async saveItemByCollection(@Body() curriculum): Promise<string> {
        try {
            Logger.log('Post request to post curriculum data to collection');
            await this.mongoService.saveItemByCollection("curriculum",  curriculum);
            return `Curriculum ${curriculum.username} curriculum saved successfully`;
        } catch (error) {
            Logger.error(`Failed to post curriculum data, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('search/:username')
    async getCurriculumByName(@Param() params): Promise<Curriculum> {
        try {
            Logger.log('Got request to get user data from collection');
            const curri: Curriculum = await this.mongoService.getCurriculumByName("curriculum", params.username) as any;
            return curri;
        } catch (error) {
            Logger.error(`Failed getting curriculum by username ${params.username}, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put('update/:username')
    async updateCurriculumByName(@Param() username, @Body() curridata): Promise<string> {
        try {
            Logger.log('Put request to update curriculum data to collection');
            await this.mongoService.updateCurriculumByName("curriculum", username, curridata);
            return `Curriculum ${curridata.username} updated successfully`;
        } catch (error) {
            Logger.error(`Failed to put data, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('insert')
    async insertToCurriculumByName(@Body() curriData): Promise<string> {
        try {
            Logger.log('Put request to update curriculum data to collection');
            const curri: Curriculum = curriData;
            const username: string = curriData.username;

            if (await this.mongoService.isItemExistByName('curriculum', username)) {
                Logger.log(`Put request to update curriculum ${curri} data to collection`);
                await this.mongoService.updateCurriculumByName("curriculum", username, curri);
            } else {
                Logger.log(`Post request to post curriculum ${curri} data to collection`);
                await this.mongoService.saveItemByCollection("curriculum",  curri);
            }
            return `Curriculum ${curriData.username} inserted successfully`;
        } catch (error) {
            Logger.error(`Failed to put data, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
