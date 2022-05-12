import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class MongoService {

    mongo_client: MongoClient;

    saveItemByCollection(collection: string, item: any) {
        
    }
}
