import { Test, TestingModule } from '@nestjs/testing';
import { StoqueController } from './stoque.controller';

describe('StoqueController', () => {
  let controller: StoqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoqueController],
    }).compile();

    controller = module.get<StoqueController>(StoqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
