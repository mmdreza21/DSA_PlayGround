// src/linked-lists/linked-lists.controller.ts
import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { LinkedListsService } from './linked-lists.service';
import { AddValueDto } from './dto/add-value.dto';

@ApiTags('02-Linked Lists')
@Controller('linked-lists')
export class LinkedListsController {
  constructor(private readonly linkedListsService: LinkedListsService) {}

  @Post('addRandom')
  @ApiOperation({ summary: 'Add 10 random numbers to the linked list' })
  @ApiResponse({ status: 201, description: '10 random items added' })
  addRandom() {
    return this.linkedListsService.addRandom();
  }

  @Get('all')
  @ApiOperation({ summary: 'Get middle node' })
  getAll() {
    return this.linkedListsService.getAll();
  }

  @Post('addLast')
  @ApiOperation({ summary: 'Add value to end of linked list' })
  @ApiBody({ type: AddValueDto })
  addLast(@Body() body: AddValueDto) {
    return this.linkedListsService.addLast(+body.value);
  }

  @Post('addFirst')
  @ApiOperation({ summary: 'Add value to start of linked list' })
  @ApiBody({ type: AddValueDto })
  addFirst(@Body() body: AddValueDto) {
    return this.linkedListsService.addFirst(+body.value);
  }

  @Delete('deleteFirst')
  @ApiOperation({ summary: 'Delete first node' })
  deleteFirst() {
    return this.linkedListsService.deleteFirst();
  }

  @Delete('deleteLast')
  @ApiOperation({ summary: 'Delete last node' })
  deleteLast() {
    return this.linkedListsService.deleteLast();
  }

  @Delete('remove/:value')
  @ApiOperation({ summary: 'Remove node by value' })
  remove(@Param('value') value: number) {
    return this.linkedListsService.remove(+value);
  }

  @Get('indexOf/:value')
  @ApiOperation({ summary: 'Find index of a value' })
  indexOf(@Param('value') value: number) {
    return this.linkedListsService.indexOf(+value);
  }

  @Get('contain/:value')
  @ApiOperation({ summary: 'Check if list contains a value' })
  contain(@Param('value') value: number) {
    return this.linkedListsService.contain(+value);
  }

  @Get('array')
  @ApiOperation({ summary: 'Return list as array' })
  toArray() {
    return this.linkedListsService.toArray();
  }

  @Post('reverse')
  @ApiOperation({ summary: 'Reverse the linked list' })
  reverse() {
    return this.linkedListsService.reverse();
  }

  @Get('kth/:k')
  @ApiOperation({ summary: 'Get kth node from end' })
  getKthFromEnd(@Param('k') k: number) {
    return this.linkedListsService.getKThFromEnd(+k);
  }

  @Get('middle')
  @ApiOperation({ summary: 'Get middle node' })
  printMiddle() {
    return this.linkedListsService.printMiddle();
  }

  @Get('loop')
  @ApiOperation({ summary: 'Check if list has a loop' })
  hasLoop() {
    return this.linkedListsService.hasLoop();
  }

  @Post('loop')
  @ApiOperation({ summary: 'Create a loop for testing' })
  createLoop() {
    return this.linkedListsService.createLoop();
  }

  @Get('string')
  @ApiOperation({ summary: 'Return list as string' })
  stringify() {
    return this.linkedListsService.stringify();
  }
}
