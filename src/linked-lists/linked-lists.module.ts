import { Module } from '@nestjs/common';
import { LinkedListsService } from './linked-lists.service';
import { LinkedListsController } from './linked-lists.controller';
import { LinkedList } from './implementation/LinkedList';

@Module({
  controllers: [LinkedListsController],
  providers: [LinkedListsService, LinkedList],
})
export class LinkedListsModule {}
