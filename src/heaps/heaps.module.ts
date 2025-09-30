import { Module } from '@nestjs/common';
import { HeapsService } from './heaps.service';
import { HeapsController } from './heaps.controller';

@Module({
  controllers: [HeapsController],
  providers: [HeapsService],
})
export class HeapsModule {}
