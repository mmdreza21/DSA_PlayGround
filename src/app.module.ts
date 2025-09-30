import { Module } from '@nestjs/common';
import { ArraysModule } from './arrays/arrays.module';
import { LinkedListsModule } from './linked-lists/linked-lists.module';
import { StackModule } from './stack/stack.module';
import { QueueModule } from './queue/queue.module';
import { HashTablesModule } from './hash-tables/hash-tables.module';
import { BinarySearchTreesModule } from './binary-search-trees/binary-search-trees.module';
import { TrieModule } from './trie/trie.module';
import { AvlTreeModule } from './avl-tree/avl-tree.module';
import { HeapsModule } from './heaps/heaps.module';
import { GraphModule } from './graph/graph.module';
import { WeightedGraphModule } from './weighted-graph/weighted-graph.module';

@Module({
  imports: [
    ArraysModule,
    LinkedListsModule,
    StackModule,
    QueueModule,
    HashTablesModule,
    BinarySearchTreesModule,
    TrieModule,
    AvlTreeModule,
    HeapsModule,
    GraphModule,
    WeightedGraphModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
