import { BadRequestException } from '@nestjs/common';
import { Queue } from './Queue';

export class QReverser {
  public static reverse(q: Queue<number>) {
    throw new BadRequestException('there is no item in Q !');
  }
}
