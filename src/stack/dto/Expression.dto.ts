import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ExpressionDto {
  @ApiProperty({
    description: 'The expression string to check for balanced brackets',
    example: '{ [ ( <div></div> ) ] }',
  })
  @IsString()
  text: string;
}
