import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<User>){}

  saveData(name: string):string{
    console.log(`${name} Saved`);
    return "Saved"
  }

  getUserbyId(id: string){
    return this.userModel.findById(id)
  }

   createUser(data: CreateUserDto){
    console.log("User Created"+data.email);
    const newUser =  new this.userModel(data);
    return newUser.save()
  }

  getUsers(){
    return this.userModel.find()
  }

  updateUser(id: string, data: UpdateUserDto){
    return this.userModel.findByIdAndUpdate(id,{$set:{email:data.email}},{new:true})
  }

  deleteUser(id: string){
    return this.userModel.findByIdAndDelete(id)
  }
}
