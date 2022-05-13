import { Body, Controller, Get, HttpException, HttpStatus, Logger, Param, Post, Put, Query } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { MongoService } from 'src/services/mongo.service';

@Controller('api/users')
export class UserController {
    constructor(readonly mongoService: MongoService) {}

    @Get('search/:username')
    async getUserByName(@Param() params): Promise<User[]> {
        try {
            Logger.log('Got request to get user data from collection');
            const user: User[] = await this.mongoService.getUserByName("users",params.username) as any;
            return user;
        } catch (error) {
            Logger.error(`Failed getting user by name ${params.username}, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('saveUser')
    async saveUserByCollection(@Body() userdata): Promise<string> {
        try {
            Logger.log('Post request to post user data to collection');
            await this.mongoService.saveItemByCollection("users",  userdata);
            return `User ${userdata.username} saved successfully`;
        } catch (error) {
            Logger.error(`Failed to post data, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put(':username')
    async updateUserByName(@Param() username, @Body() userdata): Promise<string> {
        try {
            Logger.log('Put request to update user data to collection');
            await this.mongoService.updateUserByName("users", username , userdata);
            return `Course ${userdata.username} updated successfully`;
        } catch (error) {
            Logger.error(`Failed to put data, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('validate')
    async getUserToValidate(@Query() query: User): Promise<User[]> {
        try {
            Logger.log('Got request to get user data from collection');
            Logger.log(query);
            const user: User[] = await this.mongoService.GetUserToValidate("users",query.username, query.password) as any;
            return user;
        } catch (error) {
            Logger.error(`Failed getting user by name ${query.username}, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('userValidate')
    async UserExist(@Query() query: User): Promise<User[]> {
        try {
            Logger.log('Got request to get user data from collection');
            Logger.log(query);
            const user: User[] = await this.mongoService.UserExist("users", query.username) as any;
            return user;
        } catch (error) {
            Logger.error(`Failed getting user by name ${query.username}, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post('register')
    async RegisterUser(@Body() userdata): Promise<string> {
        try {
            Logger.log('Post request to post user data to collection');
            await this.mongoService.saveItemByCollection("users",  userdata);
            return `User ${userdata.username} saved successfully`;

        } catch (error) {
            Logger.error(`Failed to post data, error: ${error}`)
            throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
