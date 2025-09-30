// dto/intersect.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class IntersectDto {
  @ApiProperty({
    example: [1, 2, 3],
    description: 'Array to intersect with current array',
    isArray: true,
    type: Number,
  })
  arr: number[];
}
