import { Injectable } from '@nestjs/common';
import { Stack } from './implementation/Stack';

@Injectable()
export class StackService {
  constructor(private readonly stack: Stack) {}

  push(item: number) {
    this.stack.push(item);
    return { items: [...this.stack], size: this.stack.size };
  }

  pop() {
    const value = this.stack.pop();
    return { popped: value, size: this.stack.size };
  }

  peek() {
    return { top: this.stack.peek() };
  }

  min() {
    return { min: this.stack.min() };
  }

  isEmpty() {
    return { isEmpty: this.stack.isEmpty() };
  }

  isFull() {
    return { isFull: this.stack.isFull() };
  }

  size() {
    return { size: this.stack.size };
  }
}
