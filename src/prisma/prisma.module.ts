import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Обов'язково експортуйте PrismaService
})
export class PrismaModule {}