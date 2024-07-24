import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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

  @Prop({ required: false })
  image?: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
