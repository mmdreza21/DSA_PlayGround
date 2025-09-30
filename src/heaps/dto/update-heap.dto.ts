import { PartialType } from '@nestjs/swagger';
import { CreateHeapDto } from './create-heap.dto';

export class UpdateHeapDto extends PartialType(CreateHeapDto) {}
