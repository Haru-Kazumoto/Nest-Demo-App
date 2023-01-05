import { Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './model/user.models';
import { UserUpdateDto } from './dto/user.update.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  // Endpoint controller from service

  // Create user
  @Post('/create-user')
  async createUser(@Body() userDto: User){
    return this.appService.createUser(userDto);
  }

  //Get user
  @Get('/get-user')
  getAllUser(){
    return this.appService.readUser();
  }

  //Update user
  @Put('/update-user/:id')
  async updateUser(@Param('id') id:String,@Body() update:UserUpdateDto)
  : Promise<User>{
    return this.appService.updateUser(id, update);
  }

  //Delete user
  @Delete('/delete-user/:id')
  deleleteUser(@Param('id') id:String): string{
    this.appService.deleteUser(id);
    return "Data has deleted.";
  }
}

