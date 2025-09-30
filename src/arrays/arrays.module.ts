import { Module } from '@nestjs/common';
import { ArraysService } from './arrays.service';
import { ArraysController } from './arrays.controller';
import { MyArray } from './implementation/MyArray';

@Module({
  controllers: [ArraysController],
  providers: [ArraysService, MyArray],
})
export class ArraysModule {}
