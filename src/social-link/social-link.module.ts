import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SocialLinkService } from './social-link.service';
import { SocialLinkResolver } from './social-link.resolver';
import { SocialLink } from './social-link.entity';  // <-- import your entity

@Module({
  imports: [TypeOrmModule.forFeature([SocialLink])],  // <-- add this
  providers: [SocialLinkService, SocialLinkResolver],
})
export class SocialLinkModule {}
