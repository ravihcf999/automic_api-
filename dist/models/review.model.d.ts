import { Entity } from '@loopback/repository';
export declare class Review extends Entity {
    id?: string;
    review?: string;
    createdDate?: string;
    email?: string;
    constructor(data?: Partial<Review>);
}
export interface ReviewRelations {
}
export type ReviewWithRelations = Review & ReviewRelations;
