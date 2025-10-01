import { Injectable } from '@nestjs/common';

import { LinkedList } from './implementation/LinkedList';

@Injectable()
export class LinkedListsService {
  constructor(private linkedList: LinkedList) {}
  addLast(value: number): any {
    this.linkedList.addLast(value);
    return this.stringifyList(); // or return current linkedList content
  }

  addFirst(value: number): any {
    this.linkedList.addFirst(value);
    return this.stringifyList();
  }

  findAll() {
    return this.stringifyList();
  }

  findOne(id: number) {
    return `This action returns a #${id} linkedList`;
  }

  remove(id: number) {
    return `This action removes a #${id} linkedList`;
  }
  private stringifyList(): string {
    return `{ ${[...this.linkedList].join(' -> ')} }`;
  }
}
