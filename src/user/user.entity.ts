import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Freelance } from '../freelance/freelance.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isConfirmed: boolean;

  @OneToOne(() => Freelance, freelancer => freelancer.user)
  freelancer: Freelance;
}