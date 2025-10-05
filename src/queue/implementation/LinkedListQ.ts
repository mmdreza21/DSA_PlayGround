import { BadRequestException } from '@nestjs/common';

class QNode {
  public next: QNode | null = null;
  constructor(public value: number) {}
}

export class LinkedListQ {
  public head: QNode | null = null;
  public tail: QNode | null = null;
  private _size: number = 0;
  public get size(): number {
    return this._size;
  }

  public enq(val: number) {
    const node = new QNode(val);
    if (this.isEmpty()) this.head = this.tail = node;
    else {
      this.tail!.next = node;
      this.tail = node;
    }
    this._size++;
  }

  public deq(): number {
    if (this.isEmpty()) throw new BadRequestException('the q is mt!');
    const val = this.head!.value;
    if (this.head === this.tail) {
      this.head = this.tail = null;
      return val;
    } else {
      const next = this.head!.next;
      this.head!.next = null;
      this.head = next;
      return val;
    }
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }

  *[Symbol.iterator](): IterableIterator<number> {
    let current = this.head;
    while (current !== null) {
      yield current.value;
      current = current.next;
    }
  }
}
