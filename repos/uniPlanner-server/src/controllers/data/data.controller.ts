import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('data')
export class DataController {
  @Get('d')
  getHello(@Res() res: Response): void {
    Logger.log('Got request to get data');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');

    let num = 1;
    const interval = setInterval(() => {
      res.write('Hayush ' + num);
      num++;
      if (num > 10) {
        res.end();
        clearInterval(interval);
      }
    }, 1000);
  }

  @Get('h')
  getHellog(): void {
    Logger.log('Got request to get data');
    throw new HttpException('Forbidden', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
