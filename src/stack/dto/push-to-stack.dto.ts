import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class PushToStackDTO {
  @ApiProperty({
    description: 'The item to push onto the stack',
    example: 42,
    type: Number,
  })
  @IsInt()
  item: number;
}
