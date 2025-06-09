import { Test, TestingModule } from '@nestjs/testing';
import { FreelanceResolver } from './freelance.resolver';

describe('FreelanceResolver', () => {
  let resolver: FreelanceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FreelanceResolver],
    }).compile();

    resolver = module.get<FreelanceResolver>(FreelanceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
