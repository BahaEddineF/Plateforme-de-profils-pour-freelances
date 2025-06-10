import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Freelance } from 'src/freelance/freelance.entity';

@ObjectType()
@Entity()
export class Skill {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  level: string;

  @Field(() => Int)
  @Column()
  freelanceId: number;

  @Field(() => Freelance)
  @ManyToOne(() => Freelance, (freelance) => freelance.skills, { eager: false })
  @JoinColumn({ name: 'freelanceId' }) // pour indiquer que freelanceId est la FK
  freelance: Freelance;
}