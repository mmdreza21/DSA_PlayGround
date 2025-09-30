import { Controller, Post, Delete, Get, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { ArraysService } from './arrays.service';
import { CreateArrayDto } from './Dto/create-array.dto';
import { RemoveAtDto } from './Dto/remove-at.dto';
import { IndexOfDto } from './Dto/index-of.dto';
import { IntersectDto } from './Dto/intersect.dto';
import { ReverseDto } from './Dto/reverse.dto';
import { InsertAtDto } from './Dto/insert-at.dto';

@ApiTags('01-arrays')
@Controller('arrays')
export class ArraysController {
  constructor(private readonly arraysService: ArraysService) {}

  @Post()
  @ApiOperation({ summary: 'Insert a new item' })
  @ApiBody({ type: CreateArrayDto })
  @ApiResponse({ status: 201, description: 'Item inserted successfully' })
  create(@Body() body: CreateArrayDto) {
    return this.arraysService.insert(body.item);
  }

  @Delete()
  @ApiOperation({ summary: 'Remove item at index' })
  @ApiBody({ type: RemoveAtDto })
  removeAt(@Body() body: RemoveAtDto) {
    return this.arraysService.removeAt(body.index);
  }

  @Post('indexOf')
  @ApiOperation({ summary: 'Find index of an item' })
  @ApiBody({ type: IndexOfDto })
  indexOf(@Body() body: IndexOfDto) {
    return this.arraysService.indexOf(body.item);
  }

  @Get('max')
  @ApiOperation({ summary: 'Get max value from array' })
  max() {
    return this.arraysService.max();
  }

  @Post('intersect')
  @ApiOperation({ summary: 'Get intersection with another array' })
  @ApiBody({ type: IntersectDto })
  intersect(@Body() body: IntersectDto) {
    return this.arraysService.intersect(body.arr);
  }

  @Post('reverse')
  @ApiOperation({ summary: 'Reverse array elements' })
  @ApiBody({ type: ReverseDto })
  reverse(@Body() body: ReverseDto) {
    return this.arraysService.reverse(body.deepClone);
  }

  @Get('reverse2')
  @ApiOperation({ summary: 'Reverse array using second approach' })
  reverse2() {
    return this.arraysService.reverse2();
  }

  @Post('insertAt')
  @ApiOperation({ summary: 'Insert item at specific index' })
  @ApiBody({ type: InsertAtDto })
  insertAt(@Body() body: InsertAtDto) {
    return this.arraysService.insertAt(body.item, body.index);
  }
}
