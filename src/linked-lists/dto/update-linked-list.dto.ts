import { PartialType } from '@nestjs/swagger';
import { CreateLinkedListDto } from './create-linked-list.dto';

export class UpdateLinkedListDto extends PartialType(CreateLinkedListDto) {}
