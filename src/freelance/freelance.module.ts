import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FreelanceService } from './freelance.service';
import { Freelance } from './freelance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Freelance])],
  providers: [FreelanceService],
  exports: [FreelanceService], // if needed by other modules
})
export class FreelanceModule {}
