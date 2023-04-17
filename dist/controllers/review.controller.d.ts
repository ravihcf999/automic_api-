import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Review } from '../models';
import { ReviewRepository } from '../repositories';
export declare class ReviewController {
    reviewRepository: ReviewRepository;
    constructor(reviewRepository: ReviewRepository);
    create(review: Omit<Review, 'id'>): Promise<Review>;
    count(where?: Where<Review>): Promise<Count>;
    find(filter?: Filter<Review>): Promise<Review[]>;
    updateAll(review: Review, where?: Where<Review>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Review>): Promise<Review>;
    updateById(id: string, review: Review): Promise<void>;
    replaceById(id: string, review: Review): Promise<void>;
    deleteById(id: string): Promise<void>;
}
