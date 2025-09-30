import { Module } from '@nestjs/common';
import { TrieService } from './trie.service';
import { TrieController } from './trie.controller';

@Module({
  controllers: [TrieController],
  providers: [TrieService],
})
export class TrieModule {}
