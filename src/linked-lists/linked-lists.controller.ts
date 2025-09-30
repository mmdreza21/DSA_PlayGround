import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LinkedListsService } from './linked-lists.service';
import { CreateLinkedListDto } from './dto/create-linked-list.dto';
import { UpdateLinkedListDto } from './dto/update-linked-list.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('2-Linked Lists')
@Controller('linked-lists')
export class LinkedListsController {
  constructor(private readonly linkedListsService: LinkedListsService) {}

  @Post()
  create(@Body() createLinkedListDto: CreateLinkedListDto) {
    return this.linkedListsService.create(createLinkedListDto);
  }

  @Get()
  findAll() {
    return this.linkedListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linkedListsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLinkedListDto: UpdateLinkedListDto,
  ) {
    return this.linkedListsService.update(+id, updateLinkedListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linkedListsService.remove(+id);
  }
}
