import { Test, TestingModule } from '@nestjs/testing';
import { LinkedListsService } from './linked-lists.service';

describe('LinkedListsService', () => {
  let service: LinkedListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinkedListsService],
    }).compile();

    service = module.get<LinkedListsService>(LinkedListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
