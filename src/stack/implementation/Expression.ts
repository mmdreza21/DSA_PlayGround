import { Injectable } from '@nestjs/common';
import { Stack } from './Stack';

@Injectable()
export class Expression {
  private pairs = new Map<string, string>([
    ['[', ']'],
    ['(', ')'],
    ['<', '>'],
    ['{', '}'],
  ]);

  private closeSet: Set<string> = new Set(this.pairs.values());

  public checkBalance(str: string) {
    const stack = new Stack<string>();

    for (const ch of str) {
      if (this.pairs.has(ch)) stack.push(ch);
      if (this.closeSet.has(ch)) {
        if (this.pairs.get(stack.pop() ?? '') !== ch) return false;
      }
    }
    return stack.isEmpty();
  }
}
