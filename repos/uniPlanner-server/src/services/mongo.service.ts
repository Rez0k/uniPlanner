import { Logger, Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { json } from 'stream/consumers';

@Injectable()
export class MongoService {
  static mongo_client: MongoClient;

  async saveItemByCollection(collection: string, item: any) {
    try {
      await MongoService.mongo_client.connect();
      const result = await MongoService.mongo_client
        .db('uniplanner')
        .collection(collection)
        .insertOne(item);
      Logger.debug(
        `New listing created with the following id: ${result.insertedId}`,
      );
    } catch (error) {
      Logger.error(
        `Failed adding new item to collection ${collection} with error: ${error}`,
      );
    } finally {
      MongoService.mongo_client.close();
    }
  }

  async getItemByCourseNumber(collection: string, number: any) {
    try {
      await MongoService.mongo_client.connect();

      const result = await MongoService.mongo_client
        .db('uniplanner').collection(collection).findOne({ course_number: number });

      if (result) {
        Logger.debug(`Found a listing in the collection: '${collection}' with the number '${number}': ${result}`);
        return result;
      } else {
        Logger.debug(`No listings found with the number '${number}'`);
      }
    } catch (error) {
      Logger.error(
        `Failed to get item from collection ${collection} with error: ${error}`,
      );
    } finally {
      MongoService.mongo_client.close();
    }
  }

  async getAllByCollection(collection: string) {
    try {
      await MongoService.mongo_client.connect();
      const result = await MongoService.mongo_client
        .db('uniplanner')
        .collection(collection).find().toArray();
      if (result) {
        Logger.debug(`Found a listing in the collection: '${collection}'`);
        Logger.debug(JSON.stringify(result));

        return result;
      } else {
        Logger.debug(`No listings found with the number`);
      }
    } catch (error) {
      Logger.error(
        `Failed to get item from collection ${collection} with error: ${error}`,
      );
    } finally {
      MongoService.mongo_client.close();
    }
  }

  async updateItemByCourseNumber(collection: string, number, item) {
    try {
      await MongoService.mongo_client.connect();
      const result = await MongoService.mongo_client
        .db('uniplanner')
        .collection(collection)
        .updateOne({ course_number: number }, { $set: item });
      Logger.debug(
        `${result.matchedCount} document(s) matched the query criteria.`,
      );
      Logger.debug(`${result.modifiedCount} document(s) was/were updated.`);
    } catch (error) {
      Logger.error(
        `Failed to update item to collection ${collection} with error: ${error}`,
      );
    } finally {
      MongoService.mongo_client.close();
    }
  }

  async deleteItemByCourseNumber(collection: string, number) {
    try {
      await MongoService.mongo_client.connect();
      const result = await MongoService.mongo_client
        .db('uniplanner')
        .collection(collection)
        .deleteOne({ course_number: number });
      Logger.debug(`${result.deletedCount} document(s) was/were deleted.`);
    } catch (error) {
      Logger.error(
        `Failed to delete item from collection ${collection} with error: ${error}`,
      );
    } finally {
      MongoService.mongo_client.close();
    }
  }
}
