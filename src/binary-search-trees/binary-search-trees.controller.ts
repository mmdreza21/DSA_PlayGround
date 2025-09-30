import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BinarySearchTreesService } from './binary-search-trees.service';
import { CreateBinarySearchTreeDto } from './dto/create-binary-search-tree.dto';
import { UpdateBinarySearchTreeDto } from './dto/update-binary-search-tree.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('6-Binary search trees')
@Controller('binary-search-trees')
export class BinarySearchTreesController {
  constructor(
    private readonly binarySearchTreesService: BinarySearchTreesService,
  ) {}

  @Post()
  create(@Body() createBinarySearchTreeDto: CreateBinarySearchTreeDto) {
    return this.binarySearchTreesService.create(createBinarySearchTreeDto);
  }

  @Get()
  findAll() {
    return this.binarySearchTreesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.binarySearchTreesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBinarySearchTreeDto: UpdateBinarySearchTreeDto,
  ) {
    return this.binarySearchTreesService.update(+id, updateBinarySearchTreeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.binarySearchTreesService.remove(+id);
  }
}
