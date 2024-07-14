import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Product } from 'src/products/entities/product.entity';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop({ require: true })
  name: string;

  @Prop({ require: true })
  description: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Product' }] })
  products: Product[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
