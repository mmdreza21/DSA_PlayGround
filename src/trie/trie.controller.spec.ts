import { Test, TestingModule } from '@nestjs/testing';
import { TrieController } from './trie.controller';
import { TrieService } from './trie.service';

describe('TrieController', () => {
  let controller: TrieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrieController],
      providers: [TrieService],
    }).compile();

    controller = module.get<TrieController>(TrieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
