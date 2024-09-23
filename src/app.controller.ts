import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  saveData(@Body() name: string): string{
    return this.appService.saveData(name)
  }

  @Get(':id')
  getUser(@Param() id: string){
    this.appService.getUserbyId(id)
  }



}
