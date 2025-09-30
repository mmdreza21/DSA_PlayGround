import { PartialType } from '@nestjs/swagger';
import { CreateTrieDto } from './create-trie.dto';

export class UpdateTrieDto extends PartialType(CreateTrieDto) {}
