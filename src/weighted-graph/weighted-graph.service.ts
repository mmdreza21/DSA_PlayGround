import { Injectable } from '@nestjs/common';
import { CreateWeightedGraphDto } from './dto/create-weighted-graph.dto';
import { UpdateWeightedGraphDto } from './dto/update-weighted-graph.dto';

@Injectable()
export class WeightedGraphService {
  create(createWeightedGraphDto: CreateWeightedGraphDto) {
    return 'This action adds a new weightedGraph';
  }

  findAll() {
    return `This action returns all weightedGraph`;
  }

  findOne(id: number) {
    return `This action returns a #${id} weightedGraph`;
  }

  update(id: number, updateWeightedGraphDto: UpdateWeightedGraphDto) {
    return `This action updates a #${id} weightedGraph`;
  }

  remove(id: number) {
    return `This action removes a #${id} weightedGraph`;
  }
}
