import { Test, TestingModule } from '@nestjs/testing';
import { HashTablesService } from './hash-tables.service';

describe('HashTablesService', () => {
  let service: HashTablesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HashTablesService],
    }).compile();

    service = module.get<HashTablesService>(HashTablesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
