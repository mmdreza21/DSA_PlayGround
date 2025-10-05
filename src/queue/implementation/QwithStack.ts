import { Stack } from 'src/stack/implementation/Stack';

export class QWithStack<T> {
  private items: T[];
  private _size: number = 0;

  constructor(
    private capacity: number,
    private stack1: Stack<T> = new Stack<T>(),
    private stack2: Stack<T> = new Stack<T>(),
  ) {} //arr works like stacks in js the pop and push methods

  public enq(val: T) {
    if (this.isFull()) throw new Error('IllegalStateException');
    this.stack1.push(val);
    this._size++;
  }

  public deq() {
    if (this.isEmpty()) throw new Error('the Queue is empty!');
    this.moveStack1ToStack2();
    this._size--;
    return this.stack2.pop();
  }

  public peek() {
    if (this.isEmpty()) throw new Error('the Queue is empty!');
    this.moveStack1ToStack2();
    this._size--;
    return this.stack2.peek();
  }

  public isEmpty(): boolean {
    return this.stack1.isEmpty() && this.stack2.isEmpty();
  }
  public isFull(): boolean {
    return this.size === this.capacity;
  }

  get size(): number {
    return this.size;
  }
  private moveStack1ToStack2() {
    if (this.stack2.isEmpty())
      while (!this.stack1.isEmpty()) this.stack2.push(this.stack1.pop()!);
  }
}
