import { Test, TestingModule } from '@nestjs/testing';
import { HeapsService } from './heaps.service';

describe('HeapsService', () => {
  let service: HeapsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeapsService],
    }).compile();

    service = module.get<HeapsService>(HeapsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
