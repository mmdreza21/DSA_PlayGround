import { Test, TestingModule } from '@nestjs/testing';
import { LinkedListsController } from './linked-lists.controller';
import { LinkedListsService } from './linked-lists.service';

describe('LinkedListsController', () => {
  let controller: LinkedListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkedListsController],
      providers: [LinkedListsService],
    }).compile();

    controller = module.get<LinkedListsController>(LinkedListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
