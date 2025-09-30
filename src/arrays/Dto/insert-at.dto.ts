// dto/insert-at.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class InsertAtDto {
  @ApiProperty({ example: 99, description: 'Item to insert' })
  item: number;

  @ApiProperty({ example: 1, description: 'Index to insert at' })
  index: number;
}
