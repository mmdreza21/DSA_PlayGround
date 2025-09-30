import { ApiProperty } from '@nestjs/swagger';

export class CreateArrayDto {
  @ApiProperty({
    example: 42,
    description: 'The item to insert into the array',
  })
  item: number;
}
