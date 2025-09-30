import { Test, TestingModule } from '@nestjs/testing';
import { BinarySearchTreesController } from './binary-search-trees.controller';
import { BinarySearchTreesService } from './binary-search-trees.service';

describe('BinarySearchTreesController', () => {
  let controller: BinarySearchTreesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BinarySearchTreesController],
      providers: [BinarySearchTreesService],
    }).compile();

    controller = module.get<BinarySearchTreesController>(BinarySearchTreesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
