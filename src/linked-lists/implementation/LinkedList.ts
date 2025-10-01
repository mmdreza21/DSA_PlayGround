import { BadRequestException, Injectable } from '@nestjs/common';

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
  public deleteFirst(): number | null {
    if (this.isEmpty())
      throw new BadRequestException('the Linked list is empty!');
    const first = this.first!.value;
    if (this.first === this.last) {
      this.first = this.last = null;
      return first;
    }

    const next = this.first!.next;
    this.first!.next = null;
    this.first = next;

    this.size--;
    return first;
  }
  private getPrevious(node: ListNode): ListNode | null {
    let current = this.first;
    while (current?.next) {
      if (current.next === node) return current;
      current = current!.next;
    }
    return null;
  }
  public deleteLast(): number | null {
    if (this.isEmpty())
      throw new BadRequestException('the Linked list is empty!');
    const last = this.last!.value;
    if (this.first === this.last) {
      this.first = this.last = null;
      return last;
    }

    const pre = this.getPrevious(this.last!);
    this.last = pre;
    pre!.next = null;
    return last;
  }

  public remove(value: number): number | null {
    if (this.isEmpty())
      throw new BadRequestException('the Linked list is empty!');
    if (value === this.first?.value) return this.deleteFirst();
    if (value === this.last?.value) return this.deleteLast();

    let current = this.first;
    let prev: ListNode | null = null;
    while (current) {
      let next = current.next;

      if (+current.value === +value) {
        prev!.next = next;
        return current.value;
      }
      prev = current;
      current = next;
    }
    return null;
  }

  public indexOf(value: number): number {
    if (this.isEmpty())
      throw new BadRequestException('the Linked list is empty!');

    let counter = 0;
    let current = this.first;

    while (current) {
      if (current.value === value) return counter;
      current = current!.next;
      counter++;
    }
    return -1;
  }

  public contain(value: number): boolean {
    //     if (this.isEmpty())
    //       throw new BadRequestException('the Linked list is empty!');

    //     let current = this.first
    //     while(current){
    //       if(current.value=== value) return true
    //       current=current!.next
    //     }
    // return false
    return this.indexOf(value) !== -1;
  }

  public toArray(): Array<number> {
    const arr = new Array<number>();

    let current = this.first;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  public reverse(): void {
    if (this.isEmpty()) return;
    let current = this.first;
    let prev: ListNode | null = null;

    while (current) {
      const next = current.next;

      current.next = prev;

      prev = current;
      current = next;
    }

    this.last = this.first;
    this.first = prev;
  }

  public getKThFromEnd(n: number): number | null {
    if (this.isEmpty()) return null;
    if (n === this.size) return this.first!.value;

    let current = this.first?.next;
    let distance = n - 1;

    while (distance--) current = current!.next;

    let prev = this.first;
    while (current) {
      prev = prev!.next;
      current = current.next;
    }
    return prev!.value;
  }

  public printMiddle() {
    if (this.isEmpty()) throw new Error('IllegalStateException');
    let current = this.first?.next;
    let prev = this.first;
    while (current) {
      if (!current.next) return [prev?.value, prev?.next?.value];
      current = current.next.next;
      prev = prev!.next;
    }
    return prev?.value;
  }

  public hasLoop(): boolean {
    if (this.isEmpty()) return false;

    let current = this.first;
    let next = this.first;

    while (current) {
      if (next === current) return true;
      current = current!.next;
      next = next!.next;
    }
    return false;
  }
  public createLoop() {
    this.last!.next = this.first;
  }
  // public createLoopToK(k: number): void {}

  private isEmpty() {
    return this.size === 0;
  }

  public stringify(): string {
    let parts: string[] = [];
    for (const val of this) {
      parts.push(val.toString());
    }
    return parts.join(' -> ');
  }

  public PrintAll(): ListNode | null {
    return this.first;
  }

  *[Symbol.iterator](): IterableIterator<string> {
    let current = this.first;

    while (current) {
      yield `${current.value}`;
      current = current.next;
    }
  }
}
