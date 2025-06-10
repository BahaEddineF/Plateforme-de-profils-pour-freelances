import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Skill } from 'src/skill/skill.entity';
import { SocialLink } from 'src/social-link/social-link.entity';

@ObjectType()
@Entity()
export class Freelance {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  profile: string;

  @Field(() => Int)
  @Column('int')
  experience: number;

  @Field(() => [Skill], { nullable: true })
  @OneToMany(() => Skill, (skill) => skill.freelance, { cascade: true })
  skills: Skill[];

  @Field(() => [SocialLink], { nullable: true })
  @OneToMany(() => SocialLink, (link) => link.freelance, { cascade: true })
  links: SocialLink[];
}
