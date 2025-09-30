import { Injectable } from '@nestjs/common';
import { MyArray } from './implementation/MyArray';

@Injectable()
export class ArraysService {
  constructor(private array: MyArray) {}
  insert(item: number): number[] {
    this.array.insert(item);
    return this.array.arrContent;
  }

  removeAt(index: number): number[] {
    this.array.removeAt(index);
    return this.array.arrContent;
  }

  indexOf(item: number): number {
    return this.array.indexOf(item);
  }

  max(): number | string {
    return this.array.max();
  }

  intersect(arr: number[]): number[] {
    return this.array.intersect(arr);
  }

  reverse(deepClone: boolean = false): (string | number)[] {
    return this.array.reverse(deepClone);
  }

  reverse2(): (string | number)[] {
    return this.array.reverse2();
  }

  insertAt(item: number, index: number): number[] {
    this.array.insertAt(item, index);
    return this.array.arrContent;
  }
}
