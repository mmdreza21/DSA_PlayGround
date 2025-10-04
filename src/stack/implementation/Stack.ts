import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class Stack<T> {
  private items: Array<T>;
  private _size: number = 0;

  private readonly STACK_CAPACITY: number = 10;

  constructor() {
    this.items = new Array(this.STACK_CAPACITY).fill(0);
  }

  public push(item: T) {
    if (this._size > this.STACK_CAPACITY)
      throw new BadRequestException('STACK OVERFLOW!!');
    this.items[this._size++] = item;
  }

  public pop(): T | null {
    if (this.isEmpty()) return null;
    return this.items[--this._size];
  }

  public peek(): T | null {
    if (this.isEmpty()) return null;
    return this.items[this.size - 1];
  }

  public min() {
    if (this.isEmpty()) return null;
    let min = this.items[0];

    for (const item of this.items) {
      if (item < min) min = item;
    }
    return min;
  }

  public isEmpty() {
    return this._size === 0;
  }

  public isFull() {
    return this._size === this.STACK_CAPACITY;
  }

  public get size(): number {
    return this._size;
  }

  *[Symbol.iterator](): IterableIterator<T> {
    for (const item of this.items) {
      yield item;
    }
  }
}
