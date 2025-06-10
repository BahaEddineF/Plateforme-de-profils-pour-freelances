import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SocialLink } from './social-link.entity';

@Injectable()
export class SocialLinkService {
  constructor(
    @InjectRepository(SocialLink)
    private socialLinkRepository: Repository<SocialLink>,
  ) {}

  async create(data: Partial<SocialLink>): Promise<SocialLink> {
    const link = this.socialLinkRepository.create(data);
    await this.socialLinkRepository.save(link);
    const savedLink = await this.socialLinkRepository.findOne({
      where: { id: link.id },
      relations: ['freelance'],
    });
    if (!savedLink) {
      throw new Error('Erreur interne : SocialLink créé mais introuvable');
    }
    return savedLink;
  }

  findAll(): Promise<SocialLink[]> {
    return this.socialLinkRepository.find({ relations: ['freelance'] });
  }

  findOne(id: number): Promise<SocialLink | null> {
    return this.socialLinkRepository.findOne({ where: { id }, relations: ['freelance'] });
  }

  async update(id: number, data: Partial<SocialLink>): Promise<SocialLink> {
    await this.socialLinkRepository.update(id, data);
    const link = await this.findOne(id);
    if (!link) {
      throw new Error('SocialLink not found');
    }
    return link;
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.socialLinkRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}