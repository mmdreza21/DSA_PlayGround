import { Controller, Post, Get, Body } from '@nestjs/common';
import { StackService } from './stack.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { PushToStackDTO } from './dto/push-to-stack.dto';
import { ExpressionDto } from './dto/Expression.dto';

@ApiTags('03-Stack')
@Controller('stack')
export class StackController {
  constructor(private readonly stackService: StackService) {}

  @Post('push')
  @ApiOperation({ summary: 'Push an item to the stack' })
  @ApiResponse({ status: 201, description: 'Item pushed successfully' })
  @ApiBody({ type: PushToStackDTO })
  push(@Body() body: PushToStackDTO) {
    return this.stackService.push(body.item);
  }

  @Post('pop')
  @ApiOperation({ summary: 'Pop the top item from the stack' })
  @ApiResponse({ status: 200, description: 'Top item popped' })
  pop() {
    return this.stackService.pop();
  }

  @Get('peek')
  @ApiOperation({ summary: 'View the top item without removing it' })
  peek() {
    return this.stackService.peek();
  }

  @Get('min')
  @ApiOperation({ summary: 'Get the minimum item in the stack' })
  min() {
    return this.stackService.min();
  }

  @Get('is-empty')
  @ApiOperation({ summary: 'Check if the stack is empty' })
  isEmpty() {
    return this.stackService.isEmpty();
  }

  @Get('is-full')
  @ApiOperation({ summary: 'Check if the stack is full' })
  isFull() {
    return this.stackService.isFull();
  }

  @Get('size')
  @ApiOperation({ summary: 'Get the current size of the stack' })
  size() {
    return this.stackService.size();
  }

  @Post('check-balance')
  @ApiOperation({ summary: 'Check if an expression has balanced brackets' })
  @ApiResponse({
    status: 200,
    description: 'Returns whether the given expression is balanced',
  })
  @ApiBody({ type: ExpressionDto })
  checkBalance(@Body() dto: ExpressionDto) {
    return this.stackService.checkBalance(dto.text);
  }
}
