import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/user.dt';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  saveData(@Body() createUserData: CreateUserDto){
    console.log(createUserData);
    return this.appService.createUser(createUserData)
  }

  @Get(':id')
  getUser(@Param('id') id: string){
    console.log(id);
    this.appService.getUserbyId(id)
  }



}
