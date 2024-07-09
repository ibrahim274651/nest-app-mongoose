import {
  Category,
  CategoryDocument,
} from './../categories/entities/category.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: Model<CategoryDocument>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createCategory = new this.categoryModel(createCategoryDto);
    return createCategory.save();
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryModel.findById(id).exec();
    if (!category) {
      throw new NotFoundException(`Category with ID "${id}" not found`);
    }
    return category;
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const uptdatedCategory = await this.categoryModel
      .findByIdAndUpdate(id, updateCategoryDto, { new: true })
      .exec();
    if (!uptdatedCategory) {
      throw new NotFoundException(`Category with ID "${id}" not found`);
    }
    return uptdatedCategory;
  }

  async remove(id: string): Promise<Category> {
    const deletedCategory = await this.categoryModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedCategory) {
      throw new NotFoundException(`Category with ID "${id}" not found`);
    }
    return deletedCategory;
  }
}
