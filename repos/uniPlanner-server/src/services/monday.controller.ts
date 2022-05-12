import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import axios from 'axios';

@Controller('api/monday')
export class MondayController {
  @Get('')
  async monday(): Promise<any> {
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('query', '{ boards (limit:1) {id name} }');

    var config = {
      method: 'post',
      url: 'https://api.monday.com/v2?Authorization=`&Type=application/json',
      headers: { 
        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE2MDI1MzU4MywidWlkIjoyOTk1NzE2OCwiaWFkIjoiMjAyMi0wNS0xMlQxNToyNTo0OC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTE4NzU5MjIsInJnbiI6InVzZTEifQ.xCrN1AhRnGoVpKClkWyYR0wTvKGCiSU2uP6WV598ofg', 
        ...data.getHeaders()
      },
      data : data
    };
    let result;

    try{
    result = await axios(config)
    }
    catch(error){
      console.log(error);
    }

    return result.data;
  }



}