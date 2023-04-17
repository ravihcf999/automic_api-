import { DefaultCrudRepository } from '@loopback/repository';
import { MongoDataSource } from '../datasources';
import { Review, ReviewRelations } from '../models';
export declare class ReviewRepository extends DefaultCrudRepository<Review, typeof Review.prototype.id, ReviewRelations> {
    constructor(dataSource: MongoDataSource);
}
