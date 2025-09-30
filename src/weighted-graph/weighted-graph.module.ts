import { Module } from '@nestjs/common';
import { WeightedGraphService } from './weighted-graph.service';
import { WeightedGraphController } from './weighted-graph.controller';

@Module({
  controllers: [WeightedGraphController],
  providers: [WeightedGraphService],
})
export class WeightedGraphModule {}
