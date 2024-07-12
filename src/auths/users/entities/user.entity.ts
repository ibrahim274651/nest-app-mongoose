import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  fname: string;

  @Prop({ required: true })
  lname: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
