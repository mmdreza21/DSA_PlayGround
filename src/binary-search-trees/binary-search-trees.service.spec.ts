import { Test, TestingModule } from '@nestjs/testing';
import { BinarySearchTreesService } from './binary-search-trees.service';

describe('BinarySearchTreesService', () => {
  let service: BinarySearchTreesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BinarySearchTreesService],
    }).compile();

    service = module.get<BinarySearchTreesService>(BinarySearchTreesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
