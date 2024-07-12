import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type productDocument = HydratedDocument<Profile>;
export class Profile {
  @Prop({ required: true })
  bio: string;

  @Prop({ required: true })
  userId: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
