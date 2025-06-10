import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Freelance } from './freelance.entity';
import { FreelanceService } from './freelance.service';

@Resolver(() => Freelance)
export class FreelanceResolver {
  constructor(private readonly freelanceService: FreelanceService) {}

  @Query(() => [Freelance])
  freelances(): Promise<Freelance[]> {
    return this.freelanceService.findAll();
  }

  @Query(() => Freelance, { nullable: true })
  freelance(@Args('id', { type: () => Int }) id: number): Promise<Freelance> {
    return this.freelanceService.findOne(id);
  }

//   @Mutation(() => Freelance)
//   createFreelance(
//     @Args('name') name: string,
//     @Args('email') email: string,
//     @Args('profile') profile: string,
//     @Args('experience', { type: () => Int }) experience: number,
//   ): Promise<Freelance> {
//     return this.freelanceService.create({ name, email, profile, experience });
//   }

//   @Mutation(() => Freelance)
//   updateFreelance(
//     @Args('id', { type: () => Int }) id: number,
//     @Args('name', { nullable: true }) name?: string,
//     @Args('email', { nullable: true }) email?: string,
//     @Args('profile', { nullable: true }) profile?: string,
//     @Args('experience', { type: () => Int, nullable: true }) experience?: number,
//   ): Promise<Freelance> {
//     return this.freelanceService.update(id, { name, email, profile, experience });
//   }

//   @Mutation(() => Boolean)
//   deleteFreelance(@Args('id', { type: () => Int }) id: number): Promise<boolean> {
//     return this.freelanceService.remove(id);
//   }
}
