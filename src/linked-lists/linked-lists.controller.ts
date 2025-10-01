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

import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddValueDto } from './dto/add-value.dto';

@ApiTags('2-Linked Lists')
@Controller('linked-lists')
export class LinkedListsController {
  constructor(private readonly linkedListsService: LinkedListsService) {}

  @Post('addLast')
  @ApiOperation({ summary: 'Add a value to the end of the linked list' })
  @ApiBody({ type: AddValueDto })
  @ApiResponse({
    status: 201,
    description: 'Value added to the end of the list',
  })
  addLast(@Body() body: AddValueDto) {
    return this.linkedListsService.addLast(body.value);
  }

  @Post('addFirst')
  @ApiOperation({ summary: 'Add a value to the beginning of the linked list' })
  @ApiBody({ type: AddValueDto })
  @ApiResponse({
    status: 201,
    description: 'Value added to the start of the list',
  })
  addFirst(@Body() body: AddValueDto) {
    return this.linkedListsService.addFirst(body.value);
  }

  @Get()
  findAll() {
    return this.linkedListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.linkedListsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.linkedListsService.remove(+id);
  }
}
