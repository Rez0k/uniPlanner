import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class MongoService {

    static mongo_client: MongoClient;

    saveItemByCollection(collection: string, item: any) {
        console.log(MongoService.mongo_client)
    }
}
