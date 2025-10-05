import { BadRequestException } from '@nestjs/common';
import { Queue } from './Queue';
import { Stack } from 'src/stack/implementation/Stack';

export class QReverser {
  public static reverse(q: Queue<number>) {
    if (q.isEmpty()) throw new BadRequestException('there is no item in Q !');
    const stack = new Stack<number>();
    while (!q.isEmpty()) stack.push(q.deq());
    while (!stack.isEmpty()) q.enq(stack.pop()!);
  }
}
