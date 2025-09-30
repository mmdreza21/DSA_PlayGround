import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AvlTreeService } from './avl-tree.service';
import { CreateAvlTreeDto } from './dto/create-avl-tree.dto';
import { UpdateAvlTreeDto } from './dto/update-avl-tree.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('7-AVL Tree ')
@Controller('avl-tree')
export class AvlTreeController {
  constructor(private readonly avlTreeService: AvlTreeService) {}

  @Post()
  create(@Body() createAvlTreeDto: CreateAvlTreeDto) {
    return this.avlTreeService.create(createAvlTreeDto);
  }

  @Get()
  findAll() {
    return this.avlTreeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avlTreeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAvlTreeDto: UpdateAvlTreeDto) {
    return this.avlTreeService.update(+id, updateAvlTreeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avlTreeService.remove(+id);
  }
}
