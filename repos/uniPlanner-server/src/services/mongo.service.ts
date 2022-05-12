import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class MongoService {

    static mongo_client: MongoClient;


    async saveItemByCollection(client: any, item: any) {
        const result = await client.db("uniplanner").collection("courses").insertOne(item);
        console.log(`New listing created with the following id: ${result.insertedId}`);
    }

    async getItemByCourseNumber(client: any, number: any) {
        const result = await client.db("uniplanner").collection("courses").findOne({ course_number: number });
        if (result) {
            console.log(`Found a listing in the collection with the name '${number}':`);
            console.log(result);
        } else {
            console.log(`No listings found with the name '${number}'`);
        }
    }

    async  updateItemByCourseNumber(client, number, item) {
        const result = await client.db("uniplanner").collection("courses")
                            .updateOne({ course_number: number }, { $set: item });
        console.log(`${result.matchedCount} document(s) matched the query criteria.`);
        console.log(`${result.modifiedCount} document(s) was/were updated.`);
    }

    async  deleteItemByCourseNumber(client, number) {
        const result = await client.db("uniplanner").collection("courses")
                .deleteOne({ course_number: number });
        console.log(`${result.deletedCount} document(s) was/were deleted.`);
    }
}
