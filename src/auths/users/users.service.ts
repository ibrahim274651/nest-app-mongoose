import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import { Profile } from 'src/profile/entities/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdProfile = new this.profileModel(createUserDto.profile);
    const profile = await createdProfile.save();

    const createdUser = new this.userModel({
      ...createUserDto,
      profile: profile._id,
    });

    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().populate('profile').exec();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id).populate('profile').exec();
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return user;
  }

  // async update(id: string, updateUserDto: any): Promise<User> {
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userModel.findById(id).exec();
    // updateProfile
    if (updateUserDto.profile) {
      await this.profileModel
        .findByIdAndUpdate(user.profile, updateUserDto.profile)
        .exec();
    }
    //updateUser
    const updatedUser = this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return updatedUser;
  }

  async remove(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    return deletedUser;
  }
}
