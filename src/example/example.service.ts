import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExampleService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.exampleEntity.findMany();
  }

  async findOne(id: number) {
    return this.prisma.exampleEntity.findUnique({ where: { id } });
  }
}