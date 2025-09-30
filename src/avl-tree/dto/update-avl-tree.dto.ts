import { PartialType } from '@nestjs/swagger';
import { CreateAvlTreeDto } from './create-avl-tree.dto';

export class UpdateAvlTreeDto extends PartialType(CreateAvlTreeDto) {}
