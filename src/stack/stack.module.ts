import { Module } from '@nestjs/common';
import { StackService } from './stack.service';
import { StackController } from './stack.controller';
import { Stack } from './implementation/Stack';
import { Expression } from './implementation/Expression';

@Module({
  controllers: [StackController],
  providers: [StackService, Stack, Expression],
  imports: [Number],
})
export class StackModule {}
