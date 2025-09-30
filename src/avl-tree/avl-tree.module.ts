import { Module } from '@nestjs/common';
import { AvlTreeService } from './avl-tree.service';
import { AvlTreeController } from './avl-tree.controller';

@Module({
  controllers: [AvlTreeController],
  providers: [AvlTreeService],
})
export class AvlTreeModule {}
