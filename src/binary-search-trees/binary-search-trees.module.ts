import { Module } from '@nestjs/common';
import { BinarySearchTreesService } from './binary-search-trees.service';
import { BinarySearchTreesController } from './binary-search-trees.controller';

@Module({
  controllers: [BinarySearchTreesController],
  providers: [BinarySearchTreesService],
})
export class BinarySearchTreesModule {}
