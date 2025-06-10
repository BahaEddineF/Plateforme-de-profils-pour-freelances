import { Test, TestingModule } from '@nestjs/testing';
import { SocialLinkResolver } from './social-link.resolver';

describe('SocialLinkResolver', () => {
  let resolver: SocialLinkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SocialLinkResolver],
    }).compile();

    resolver = module.get<SocialLinkResolver>(SocialLinkResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
