import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ExampleController } from './example.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Імпортуйте PrismaModule

@Module({
  imports: [PrismaModule], // Додайте PrismaModule тут
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}