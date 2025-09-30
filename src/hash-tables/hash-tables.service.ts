import { Injectable } from '@nestjs/common';
import { CreateHashTableDto } from './dto/create-hash-table.dto';
import { UpdateHashTableDto } from './dto/update-hash-table.dto';

@Injectable()
export class HashTablesService {
  create(createHashTableDto: CreateHashTableDto) {
    return 'This action adds a new hashTable';
  }

  findAll() {
    return `This action returns all hashTables`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hashTable`;
  }

  update(id: number, updateHashTableDto: UpdateHashTableDto) {
    return `This action updates a #${id} hashTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} hashTable`;
  }
}
