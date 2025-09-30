import { Module } from '@nestjs/common';
import { LinkedListsService } from './linked-lists.service';
import { LinkedListsController } from './linked-lists.controller';

@Module({
  controllers: [LinkedListsController],
  providers: [LinkedListsService],
})
export class LinkedListsModule {}
