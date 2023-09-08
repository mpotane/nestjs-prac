import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cats.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {}
