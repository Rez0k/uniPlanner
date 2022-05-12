import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class MongoService {

    mongo_client: MongoClient;

    saveItemByCollection(collection: string, item: any) {
        const result = await client.db("uniplanner").collection("courses").insertOne(c);
        console.log(`New listing created with the following id: ${result.insertedId}`);
    }
}
