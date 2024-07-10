import { Type } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Category } from 'src/categories/entities/category.entity';

export type productDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ require: true })
  name: string;

  @Prop({ require: true })
  price: number;

  // @Prop({ type: Types.ObjectId, ref: Category.name, required: true })
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Category.name,
    required: true,
  })
  // category: Types.ObjectId;
  category?: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
