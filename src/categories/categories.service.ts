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
  create(createCategoryDto: CreateCategoryDto) {
    return new this.categoryModel(createCategoryDto).save();
  }

  findAll() {
    return this.categoryModel.find().exec();
  }

  findOne(id: string) {
    return this.categoryModel.findById(id);
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryModel.findByIdAndUpdate(id, updateCategoryDto, {
      new: true,
    });
  }

  remove(id: string) {
    return this.categoryModel.findByIdAndDelete(id);
  }
}
