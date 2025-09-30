import { Test, TestingModule } from '@nestjs/testing';
import { AvlTreeService } from './avl-tree.service';

describe('AvlTreeService', () => {
  let service: AvlTreeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvlTreeService],
    }).compile();

    service = module.get<AvlTreeService>(AvlTreeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
