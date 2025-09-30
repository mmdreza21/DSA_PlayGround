import { Test, TestingModule } from '@nestjs/testing';
import { AvlTreeController } from './avl-tree.controller';
import { AvlTreeService } from './avl-tree.service';

describe('AvlTreeController', () => {
  let controller: AvlTreeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvlTreeController],
      providers: [AvlTreeService],
    }).compile();

    controller = module.get<AvlTreeController>(AvlTreeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
