import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(User.name) private userModel: Model<User>){}
  getHello(): string {
    return 'Hello World!';
  }


  saveData(name: string):string{
    console.log(`${name} Saved`);
    return "Saved"
  }

  getUserbyId(id: string){
    console.log(`User with id:${id}`);
    return
  }

   createUser(data: CreateUserDto){
    console.log("User Created"+data.email);
    const newUser =  new this.userModel(data);
    return newUser.save()
  }
}
