import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import mongoose from 'mongoose';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers() {
    return this.appService.getUsers()
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserData: CreateUserDto){
    console.log(createUserData);
    return this.appService.createUser(createUserData)
  }

  @Get(':id')
  async getUserById(@Param('id') id: string){
    // Check Object id is valid
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if(!isValid)throw new HttpException("User not found",404)
    
    // Finding User by id
    const user = await this.appService.getUserbyId(id)
    if(!user)throw new HttpException("User not found",404)
    return user
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateUserdata(@Param('id') id: string, @Body() data:UpdateUserDto){
     // Check Object id is valid
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if(!isValid)throw new HttpException("Invalid Userid",400)

    const updatedUser = await this.appService.updateUser(id,data)
    if(!updatedUser)throw new HttpException("User Not Found",404)
    return updatedUser
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string){
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if(!isValid)throw new HttpException("Invalid Userid",400)

    const deletedUser = await this.appService.deleteUser(id);
    if(!deletedUser)throw new HttpException("User Not Found",404)
    return 
  }



}
