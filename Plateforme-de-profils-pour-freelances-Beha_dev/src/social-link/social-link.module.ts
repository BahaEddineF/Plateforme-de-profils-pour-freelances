import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialLink } from './social-link.entity';
import { SocialLinkService } from './social-link.service';
import { SocialLinkResolver } from './social-link.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([SocialLink])],
  providers: [SocialLinkService, SocialLinkResolver],
})
export class SocialLinkModule {}
