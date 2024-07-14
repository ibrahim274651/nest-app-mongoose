import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type productDocument = HydratedDocument<Profile>;
@Schema()
export class Profile {
  @Prop({ required: true })
  fname: string;

  @Prop({ required: true })
  lname: string;

  @Prop({ required: false })
  bio?: string;

  @Prop({ required: false })
  age?: number;

  // @Prop({ required: true })
  // userId: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
