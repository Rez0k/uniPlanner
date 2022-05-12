import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('api/courses')
export class DataController {
  @Get('key')
  getCourseById(): string {
    return 'Uriel the fag';
  }

  // @Get('h')
  // getHellog(): void {
  //   Logger.log('Got request to get data');
  //   throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
  // }
}
