import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SocialLink } from './social-link.entity';
import { SocialLinkService } from './social-link.service';

@Resolver(() => SocialLink)
export class SocialLinkResolver {
  constructor(private readonly socialLinkService: SocialLinkService) {}

  @Query(() => [SocialLink])
  socialLinks(): Promise<SocialLink[]> {
    return this.socialLinkService.findAll();
  }

  @Query(() => SocialLink, { nullable: true })
  socialLink(@Args('id', { type: () => Int }) id: number): Promise<SocialLink | null> {
    return this.socialLinkService.findOne(id);
  }

  @Mutation(() => SocialLink)
  createSocialLink(
    @Args('platform') platform: string,
    @Args('url') url: string,
    @Args('freelanceId', { type: () => Int }) freelanceId: number,
  ): Promise<SocialLink> {
    return this.socialLinkService.create({ platform, url, freelanceId });
  }

  @Mutation(() => SocialLink)
  updateSocialLink(
    @Args('id', { type: () => Int }) id: number,
    @Args('platform', { nullable: true }) platform?: string,
    @Args('url', { nullable: true }) url?: string,
  ): Promise<SocialLink> {
    return this.socialLinkService.update(id, { platform, url });
  }

  @Mutation(() => Boolean)
  deleteSocialLink(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.socialLinkService.remove(id);
  }
}
