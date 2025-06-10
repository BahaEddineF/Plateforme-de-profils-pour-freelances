import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
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

  @Field({ nullable: true })
  @Column({ nullable: true })
  bio?: string;

  @Field(() => [SocialLink], { nullable: true })
  @OneToMany(() => SocialLink, (link) => link.freelance, { cascade: true })
  links: SocialLink[];
}
