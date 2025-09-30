import { PartialType } from '@nestjs/swagger';
import { CreateBinarySearchTreeDto } from './create-binary-search-tree.dto';

export class UpdateBinarySearchTreeDto extends PartialType(CreateBinarySearchTreeDto) {}
