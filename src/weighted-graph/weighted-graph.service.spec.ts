import { Test, TestingModule } from '@nestjs/testing';
import { WeightedGraphService } from './weighted-graph.service';

describe('WeightedGraphService', () => {
  let service: WeightedGraphService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeightedGraphService],
    }).compile();

    service = module.get<WeightedGraphService>(WeightedGraphService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
