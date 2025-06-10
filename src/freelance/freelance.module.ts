import { Module } from '@nestjs/common';
import { FreelanceService } from './freelance.service';
import { FreelanceResolver } from './freelance.resolver';

@Module({
  providers: [FreelanceService, FreelanceResolver]
})
export class FreelanceModule {}
