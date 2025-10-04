import { Injectable } from '@nestjs/common';
import { Stack } from './implementation/Stack';
import { Expression } from './implementation/Expression';

@Injectable()
export class StackService {
  constructor(
    private readonly stack: Stack<number>,
    private readonly expression: Expression,
  ) {}

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

  checkBalance(text: string) {
    const isBalanced = this.expression.checkBalance(text);
    return {
      expression: text,
      balanced: isBalanced,
    };
  }
}
