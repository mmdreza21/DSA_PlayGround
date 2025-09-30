import { Test, TestingModule } from '@nestjs/testing';
import { WeightedGraphController } from './weighted-graph.controller';
import { WeightedGraphService } from './weighted-graph.service';

describe('WeightedGraphController', () => {
  let controller: WeightedGraphController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeightedGraphController],
      providers: [WeightedGraphService],
    }).compile();

    controller = module.get<WeightedGraphController>(WeightedGraphController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
