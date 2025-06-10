import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Freelance } from './freelance.entity';
import { FreelanceService } from './freelance.service';
import { FreelanceResolver } from './freelance.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Freelance])],
  providers: [FreelanceService, FreelanceResolver],
})
export class FreelanceModule {}
