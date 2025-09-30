import { Injectable } from '@nestjs/common';
import { CreateHeapDto } from './dto/create-heap.dto';
import { UpdateHeapDto } from './dto/update-heap.dto';

@Injectable()
export class HeapsService {
  create(createHeapDto: CreateHeapDto) {
    return 'This action adds a new heap';
  }

  findAll() {
    return `This action returns all heaps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} heap`;
  }

  update(id: number, updateHeapDto: UpdateHeapDto) {
    return `This action updates a #${id} heap`;
  }

  remove(id: number) {
    return `This action removes a #${id} heap`;
  }
}
