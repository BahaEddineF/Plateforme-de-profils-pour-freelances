import { Module } from '@nestjs/common';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { Skill } from './skill.entity';
  import { SkillService } from './skill.service';
  import { SkillResolver } from './skill.resolver';
  import { Freelance } from '../freelance/freelance.entity';
  
  @Module({
    imports: [TypeOrmModule.forFeature([Skill, Freelance])], // <- importer les entités utilisées
    providers: [SkillService, SkillResolver],
    exports: [SkillService],
  })
  export class SkillModule {}
