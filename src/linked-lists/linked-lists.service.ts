import { Injectable } from '@nestjs/common';
import { CreateLinkedListDto } from './dto/create-linked-list.dto';
import { UpdateLinkedListDto } from './dto/update-linked-list.dto';

@Injectable()
export class LinkedListsService {
  create(createLinkedListDto: CreateLinkedListDto) {
    return 'This action adds a new linkedList';
  }

  findAll() {
    return `This action returns all linkedLists`;
  }

  findOne(id: number) {
    return `This action returns a #${id} linkedList`;
  }

  update(id: number, updateLinkedListDto: UpdateLinkedListDto) {
    return `This action updates a #${id} linkedList`;
  }

  remove(id: number) {
    return `This action removes a #${id} linkedList`;
  }
}
