import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Skill } from './skill.entity';
import { SkillService } from './skill.service';

@Resolver(() => Skill)
export class SkillResolver {
  constructor(private readonly skillService: SkillService) {}

  @Query(() => [Skill])
  skills(): Promise<Skill[]> {
    return this.skillService.findAll();
  }

  @Query(() => Skill, { nullable: true })
skill(@Args('id', { type: () => Int }) id: number): Promise<Skill | null> {
  return this.skillService.findOne(id);
}


@Mutation(() => Skill)
createSkill(
  @Args('name') name: string,
  @Args('level') level: string,
  @Args('freelanceId', { type: () => Int }) freelanceId: number,
): Promise<Skill> {
  return this.skillService.create({ name, level, freelanceId });
}


  @Mutation(() => Skill)
  updateSkill(
    @Args('id', { type: () => Int }) id: number,
    @Args('name', { nullable: true }) name?: string,
    @Args('level', { nullable: true }) level?: string,
  ): Promise<Skill> {
    return this.skillService.update(id, { name, level });
  }

  @Mutation(() => Boolean)
  deleteSkill(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
    return this.skillService.remove(id);
  }
}