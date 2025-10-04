import { BadRequestException } from '@nestjs/common';

export class Queue<T> {
  items: Array<T>;
  front: number = 0;
  rear: number = 0;
  private _size: number;

  private readonly Q_CAPACITY: number = 10;
  constructor() {
    this.items = new Array(this.Q_CAPACITY).fill(0);
  }

  public enq(item: T) {
    if (this.isFull()) throw new BadRequestException('Q is full!');
    this.items[this.rear] = item;
    this.rear = (this.rear + 1) % this.Q_CAPACITY;
    this._size++;
  }

  public deq(): T {
    if (this.isEmpty())
      throw new BadRequestException('there is no item in Q !');
    const val = this.items[this.front];
    this.front = (this.front + 1) % this.Q_CAPACITY;
    this._size++;
    return val;
  }

  public peek(): T {
    if (this.isEmpty())
      throw new BadRequestException('there is no item in Q !');
    const val = this.items[this.front];
    return val;
  }

  public isEmpty() {
    return this.size === 0;
  }

  public isFull() {
    return this.size >= this.Q_CAPACITY;
  }

  public get size(): number {
    return this._size;
  }
}
