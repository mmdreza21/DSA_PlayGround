import { Test, TestingModule } from '@nestjs/testing';
import { HeapsController } from './heaps.controller';
import { HeapsService } from './heaps.service';

describe('HeapsController', () => {
  let controller: HeapsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeapsController],
      providers: [HeapsService],
    }).compile();

    controller = module.get<HeapsController>(HeapsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
