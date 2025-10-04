import { Module } from '@nestjs/common';
import { StackService } from './stack.service';
import { StackController } from './stack.controller';
import { Stack } from './implementation/Stack';

@Module({
  controllers: [StackController],
  providers: [StackService, Stack],
  imports: [Number],
})
export class StackModule {}
