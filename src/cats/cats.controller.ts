import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cats.dto';
import { UpdateCatDto } from './dto/update-cats.dto';
import { ListAllEntities } from './dto/list-cats.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    return 'A cat has been created!';
  }

  @Get()
  async findAll(@Query('limit') limit: ListAllEntities) {
    return this.catsService.findAll(limit);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    this.catsService.update(+id, updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.catsService.deleteCat(+id);
    return `This action removes a #${id} cat`;
  }
}
