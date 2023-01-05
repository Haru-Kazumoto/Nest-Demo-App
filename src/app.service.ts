import { Injectable } from '@nestjs/common';
import {User, UserDocument} from './model/user.models'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor (
    @InjectModel('user') private readonly userModel: Model<UserDocument>
  ){}

  // Creating user
  async createUser(user: User): Promise<User>{
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  // Get all user
  async readUser(){
    return this.userModel.find({})
    .then((user)=>{return user})
    .catch((error)=>console.log(error));
  }

  // Update user by id
  async updateUser(id,data): Promise<User>{
    return this.userModel.findByIdAndUpdate(id, data, {new:true})
  }

  // Delete user by id
  async deleteUser(id){
    return this.userModel.findByIdAndRemove(id);
  }
}
