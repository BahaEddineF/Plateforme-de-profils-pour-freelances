import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Freelance } from 'src/freelance/freelance.entity';

@ObjectType()
@Entity()
export class SocialLink {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  platform: string;

  @Field()
  @Column()
  url: string;

  @Field(() => Int)
  @Column()
  freelanceId: number;

  @Field(() => Freelance)
  @ManyToOne(() => Freelance, (freelance) => freelance.links)
  @JoinColumn({ name: 'freelanceId' })
  freelance: Freelance;
}