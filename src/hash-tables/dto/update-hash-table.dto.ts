import { PartialType } from '@nestjs/swagger';
import { CreateHashTableDto } from './create-hash-table.dto';

export class UpdateHashTableDto extends PartialType(CreateHashTableDto) {}
