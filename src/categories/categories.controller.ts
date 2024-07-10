import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  HttpException,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import mongoose from 'mongoose';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post('/create')
  @UsePipes(new ValidationPipe())
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get('/index')
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 404);
    const findCategoryById = await this.categoriesService.findOne(id);
    if (!findCategoryById) throw new HttpException('Category not found', 404);
    return findCategoryById;
  }

  @Patch('/:id')
  @UsePipes(new ValidationPipe())
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 404);
    const updatedCategory = await this.categoriesService.update(
      id,
      updateCategoryDto,
    );
    if (!updatedCategory) throw new HttpException('Category not found', 404);
    return updatedCategory;
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 404);
    const deletedCategory = await this.categoriesService.remove(id);
    if (!deletedCategory) throw new HttpException('Category not found', 404);
    return deletedCategory;
  }
}
