// dto/remove-at.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class RemoveAtDto {
  @ApiProperty({
    example: 2,
    description: 'The index position of the element to remove',
  })
  index: number;
}
