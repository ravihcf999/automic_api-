"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ReviewController = class ReviewController {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async create(review) {
        return this.reviewRepository.create(review);
    }
    async count(where) {
        return this.reviewRepository.count(where);
    }
    async find(filter) {
        return this.reviewRepository.find(filter);
    }
    async updateAll(review, where) {
        return this.reviewRepository.updateAll(review, where);
    }
    async findById(id, filter) {
        return this.reviewRepository.findById(id, filter);
    }
    async updateById(id, review) {
        await this.reviewRepository.updateById(id, review);
    }
    async replaceById(id, review) {
        await this.reviewRepository.replaceById(id, review);
    }
    async deleteById(id) {
        await this.reviewRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/reviews'),
    (0, rest_1.response)(200, {
        description: 'Review model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Review) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Review, {
                    title: 'NewReview',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/reviews/count'),
    (0, rest_1.response)(200, {
        description: 'Review model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Review)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/reviews'),
    (0, rest_1.response)(200, {
        description: 'Array of Review model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Review, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Review)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/reviews'),
    (0, rest_1.response)(200, {
        description: 'Review PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Review, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Review)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Review, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/reviews/{id}'),
    (0, rest_1.response)(200, {
        description: 'Review model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Review, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Review, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/reviews/{id}'),
    (0, rest_1.response)(204, {
        description: 'Review PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Review, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Review]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/reviews/{id}'),
    (0, rest_1.response)(204, {
        description: 'Review PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Review]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/reviews/{id}'),
    (0, rest_1.response)(204, {
        description: 'Review DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ReviewController.prototype, "deleteById", null);
ReviewController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ReviewRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ReviewRepository])
], ReviewController);
exports.ReviewController = ReviewController;
//# sourceMappingURL=review.controller.js.map