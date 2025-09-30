import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WeightedGraphService } from './weighted-graph.service';
import { CreateWeightedGraphDto } from './dto/create-weighted-graph.dto';
import { UpdateWeightedGraphDto } from './dto/update-weighted-graph.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('11-Weighted Graph')
@Controller('weighted-graph')
export class WeightedGraphController {
  constructor(private readonly weightedGraphService: WeightedGraphService) {}

  @Post()
  create(@Body() createWeightedGraphDto: CreateWeightedGraphDto) {
    return this.weightedGraphService.create(createWeightedGraphDto);
  }

  @Get()
  findAll() {
    return this.weightedGraphService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weightedGraphService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWeightedGraphDto: UpdateWeightedGraphDto,
  ) {
    return this.weightedGraphService.update(+id, updateWeightedGraphDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weightedGraphService.remove(+id);
  }
}
