import { Injectable } from '@nestjs/common';

class ListNode {
  constructor(
    public value: number,
    public next: ListNode | null = null,
  ) {}
}

@Injectable()
export class LinkedList {
  private first: ListNode | null = null;
  private last: ListNode | null = null;
  private size: number;

  public addLast(value: number): void {
    const node = new ListNode(value);
    if (!this.first && !this.last) this.last = this.first = node;
    else {
      this.last!.next = node;
      this.last = node;
    }
    this.size++;
  }

  public addFirst(value: number) {
    const node = new ListNode(value);
    if (!this.first && !this.last) this.last = this.first = node;
    else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
  }
  //   public deleteFirst(): number | undefined {}
  private getPrevious(node: ListNode) {}
  public deleteLast() {}
  public remove(value: number) {}
  //   public indexOf(value: number): number {}
  //   public contain(value: number): boolean {}
  public toArray() {}
  public reverse(): void {}
  public getKThFromEnd(n: number) {}
  public printMiddle() {}
  //   public hasLoop(): boolean {}
  public createLoop() {}
  public createLoopToK(k: number): void {}

  *[Symbol.iterator](): IterableIterator<string> {
    let current = this.first;

    while (current) {
      yield `${current.value}`;
      current = current.next;
    }
  }
}
