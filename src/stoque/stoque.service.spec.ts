import { Test, TestingModule } from '@nestjs/testing';
import { StoqueService } from './stoque.service';

describe('StoqueService', () => {
  let service: StoqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoqueService],
    }).compile();

    service = module.get<StoqueService>(StoqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
