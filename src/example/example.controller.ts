import { Controller, Get, Param } from '@nestjs/common';
import { ExampleService } from './example.service';

@Controller('examples')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  async findAll() {
    return this.exampleService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.exampleService.findOne(+id);
  }
}