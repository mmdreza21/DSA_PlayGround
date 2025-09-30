import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HeapsService } from './heaps.service';
import { CreateHeapDto } from './dto/create-heap.dto';
import { UpdateHeapDto } from './dto/update-heap.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('8-Heaps')
@Controller('heaps')
export class HeapsController {
  constructor(private readonly heapsService: HeapsService) {}

  @Post()
  create(@Body() createHeapDto: CreateHeapDto) {
    return this.heapsService.create(createHeapDto);
  }

  @Get()
  findAll() {
    return this.heapsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heapsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeapDto: UpdateHeapDto) {
    return this.heapsService.update(+id, updateHeapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heapsService.remove(+id);
  }
}
