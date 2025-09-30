import { Injectable } from '@nestjs/common';
import { CreateTrieDto } from './dto/create-trie.dto';
import { UpdateTrieDto } from './dto/update-trie.dto';

@Injectable()
export class TrieService {
  create(createTrieDto: CreateTrieDto) {
    return 'This action adds a new trie';
  }

  findAll() {
    return `This action returns all trie`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trie`;
  }

  update(id: number, updateTrieDto: UpdateTrieDto) {
    return `This action updates a #${id} trie`;
  }

  remove(id: number) {
    return `This action removes a #${id} trie`;
  }
}
