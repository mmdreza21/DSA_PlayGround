import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TrieService } from './trie.service';
import { CreateTrieDto } from './dto/create-trie.dto';
import { UpdateTrieDto } from './dto/update-trie.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('9-Trie')
@Controller('trie')
export class TrieController {
  constructor(private readonly trieService: TrieService) {}

  @Post()
  create(@Body() createTrieDto: CreateTrieDto) {
    return this.trieService.create(createTrieDto);
  }

  @Get()
  findAll() {
    return this.trieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trieService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrieDto: UpdateTrieDto) {
    return this.trieService.update(+id, updateTrieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trieService.remove(+id);
  }
}
