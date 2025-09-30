import { Injectable } from '@nestjs/common';
import { CreateBinarySearchTreeDto } from './dto/create-binary-search-tree.dto';
import { UpdateBinarySearchTreeDto } from './dto/update-binary-search-tree.dto';

@Injectable()
export class BinarySearchTreesService {
  create(createBinarySearchTreeDto: CreateBinarySearchTreeDto) {
    return 'This action adds a new binarySearchTree';
  }

  findAll() {
    return `This action returns all binarySearchTrees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} binarySearchTree`;
  }

  update(id: number, updateBinarySearchTreeDto: UpdateBinarySearchTreeDto) {
    return `This action updates a #${id} binarySearchTree`;
  }

  remove(id: number) {
    return `This action removes a #${id} binarySearchTree`;
  }
}
