import { Injectable } from '@nestjs/common';
import { CreateAvlTreeDto } from './dto/create-avl-tree.dto';
import { UpdateAvlTreeDto } from './dto/update-avl-tree.dto';

@Injectable()
export class AvlTreeService {
  create(createAvlTreeDto: CreateAvlTreeDto) {
    return 'This action adds a new avlTree';
  }

  findAll() {
    return `This action returns all avlTree`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avlTree`;
  }

  update(id: number, updateAvlTreeDto: UpdateAvlTreeDto) {
    return `This action updates a #${id} avlTree`;
  }

  remove(id: number) {
    return `This action removes a #${id} avlTree`;
  }
}
