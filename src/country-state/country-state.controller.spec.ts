import { Test, TestingModule } from '@nestjs/testing';
import { CountryStateController } from './country-state.controller';

describe('CountryStateController', () => {
  let controller: CountryStateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountryStateController],
    }).compile();

    controller = module.get<CountryStateController>(CountryStateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
