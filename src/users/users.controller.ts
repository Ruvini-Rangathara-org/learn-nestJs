import {Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    createUser(@Body() user: {name: string, email: string, role: 'ADMIN' | 'USER' | 'INTERN'  })  {
        return this.usersService.create(user);
    }

    @Patch(':id')   // http://localhost:3000/users/1
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() userUpdate:{name?: string, email?: string, role?: 'ADMIN' | 'USER' | 'INTERN'  }) {
        return this.usersService.update(id, userUpdate);
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
