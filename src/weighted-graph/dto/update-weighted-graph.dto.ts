import { PartialType } from '@nestjs/swagger';
import { CreateWeightedGraphDto } from './create-weighted-graph.dto';

export class UpdateWeightedGraphDto extends PartialType(CreateWeightedGraphDto) {}
