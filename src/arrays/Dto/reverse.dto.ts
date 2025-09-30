// dto/reverse.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';

export class ReverseDto {
  @ApiPropertyOptional({
    example: true,
    description: 'Perform deep clone when reversing',
    default: false,
  })
  deepClone?: boolean;
}
