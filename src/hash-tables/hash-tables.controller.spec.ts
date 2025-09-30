import { Test, TestingModule } from '@nestjs/testing';
import { HashTablesController } from './hash-tables.controller';
import { HashTablesService } from './hash-tables.service';

describe('HashTablesController', () => {
  let controller: HashTablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HashTablesController],
      providers: [HashTablesService],
    }).compile();

    controller = module.get<HashTablesController>(HashTablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
