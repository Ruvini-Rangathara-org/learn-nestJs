import {Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    createUser(@Body(ValidationPipe) createUserDto: CreateUserDto)  {
        return this.usersService.create(createUserDto);
    }

    @Patch(':id')   // http://localhost:3000/users/1
    updateUser(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto:UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.delete(id);
    }


    @Get()     // GET  /users?role=INTERN
    findAll(@Query('role') role ?: 'INTERN' | 'USER' | 'ADMIN') {
        return this.usersService.findAll(role);
    }

}
