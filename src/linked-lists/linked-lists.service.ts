// src/linked-lists/linked-lists.service.ts
import { Injectable } from '@nestjs/common';
import { LinkedList } from './implementation/LinkedList';

@Injectable()
export class LinkedListsService {
  constructor(private linkedList: LinkedList) {}

  addLast(value: number) {
    this.linkedList.addLast(value);
    return this.linkedList.stringify();
  }

  addRandom() {
    for (let i = 0; i < 10; i++) {
      const random = Math.floor(Math.random() * 100); // 0–99
      this.linkedList.addLast(random);
    }
    return this.linkedList.stringify();
  }

  getAll() {
    return this.linkedList.PrintAll();
  }

  addFirst(value: number) {
    this.linkedList.addFirst(value);
    return this.linkedList.stringify();
  }

  deleteFirst() {
    const removed = this.linkedList.deleteFirst();
    return { removed, list: this.linkedList.stringify() };
  }

  deleteLast() {
    const removed = this.linkedList.deleteLast();
    return { removed, list: this.linkedList.stringify() };
  }

  remove(value: number) {
    const removed = this.linkedList.remove(value);
    return { removed, list: this.linkedList.stringify() };
  }

  indexOf(value: number) {
    return this.linkedList.indexOf(value);
  }

  contain(value: number) {
    return this.linkedList.contain(value);
  }

  toArray() {
    return this.linkedList.toArray();
  }

  reverse() {
    this.linkedList.reverse();
    return this.linkedList.stringify();
  }

  getKThFromEnd(k: number) {
    return this.linkedList.getKThFromEnd(k);
  }

  printMiddle() {
    return this.linkedList.printMiddle();
  }

  hasLoop() {
    return this.linkedList.hasLoop();
  }

  createLoop() {
    this.linkedList.createLoop();
    return 'Loop created';
  }

  stringify() {
    return this.linkedList.stringify();
  }
}
