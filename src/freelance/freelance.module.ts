import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreelanceResolver } from './freelance.resolver';
import { FreelanceService } from './freelance.service';
import { Freelance } from './freelance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Freelance])],
  providers: [FreelanceResolver, FreelanceService],
  exports: [FreelanceService],
})
export class FreelanceModule {}
