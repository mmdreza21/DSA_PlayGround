import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HashTablesService } from './hash-tables.service';
import { CreateHashTableDto } from './dto/create-hash-table.dto';
import { UpdateHashTableDto } from './dto/update-hash-table.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('5-Hash Tables ')
@Controller('hash-tables')
export class HashTablesController {
  constructor(private readonly hashTablesService: HashTablesService) {}

  @Post()
  create(@Body() createHashTableDto: CreateHashTableDto) {
    return this.hashTablesService.create(createHashTableDto);
  }

  @Get()
  findAll() {
    return this.hashTablesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hashTablesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHashTableDto: UpdateHashTableDto,
  ) {
    return this.hashTablesService.update(+id, updateHashTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hashTablesService.remove(+id);
  }
}
