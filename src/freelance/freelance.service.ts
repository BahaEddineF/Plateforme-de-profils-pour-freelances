import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Freelance } from './freelance.entity';

@Injectable()
export class FreelanceService {
  constructor(
    @InjectRepository(Freelance)
    private freelanceRepository: Repository<Freelance>,
  ) {}

  create(freelanceData: Partial<Freelance>): Promise<Freelance> {
    const freelance = this.freelanceRepository.create(freelanceData);
    return this.freelanceRepository.save(freelance);
  }

  findAll(): Promise<Freelance[]> {
    return this.freelanceRepository.find({ relations: ['skills', 'links'] });
  }

  async findOne(id: number): Promise<Freelance> {
    const freelance = await this.freelanceRepository.findOne({ where: { id }, relations: ['skills', 'links'] });
    if (!freelance) {
      throw new NotFoundException(`Freelance with id ${id} not found`);
    }
    return freelance;
  }

  async update(id: number, updateData: Partial<Freelance>): Promise<Freelance> {
    await this.freelanceRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.freelanceRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}