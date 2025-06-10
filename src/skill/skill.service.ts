
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from './skill.entity';
import { Freelance } from '../freelance/freelance.entity'; // adapte le chemin si nécessaire

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>,

    @InjectRepository(Freelance)
    private freelanceRepository: Repository<Freelance>,
  ) {}

  async create(skillData: { name: string; level: string; freelanceId: number }): Promise<Skill> {
    const freelance = await this.freelanceRepository.findOne({ where: { id: skillData.freelanceId } });
    if (!freelance) {
      throw new Error('Freelance not found');
    }

    const skill = this.skillRepository.create({
      name: skillData.name,
      level: skillData.level,
      freelance: freelance,
    });

    return this.skillRepository.save(skill);
  }


  findAll(): Promise<Skill[]> {
    return this.skillRepository.find({ relations: ['freelance'] });
  }

  findOne(id: number): Promise<Skill | null> {
    return this.skillRepository.findOne({ where: { id }, relations: ['freelance'] });
  }

  async update(id: number, updateData: Partial<Skill>): Promise<Skill> {
    await this.skillRepository.update(id, updateData);
    const skill = await this.findOne(id);
    if (!skill) {
      throw new Error('Skill not found');
    }
    return skill;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.skillRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}