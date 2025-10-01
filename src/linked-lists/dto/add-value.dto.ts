// dto/add-value.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class AddValueDto {
  @ApiProperty({
    example: 42,
    description: 'Value to insert into the linked list',
  })
  value: number;
}
