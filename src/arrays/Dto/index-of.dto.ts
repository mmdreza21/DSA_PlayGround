// dto/index-of.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class IndexOfDto {
  @ApiProperty({ example: 42, description: 'Item to search for' })
  item: number;
}
