import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return 'All users';
    }

    @Get(':id')
    getUser() {
        return 'A user';
    }

    @Get('/interns')
    getInterns() {
        return 'All interns';
    }

    @Post()
    createUser(@Body() user: {})  {
        return user;
    }

    @Patch(':id')   // http://localhost:3000/users/1
    updateUser(@Param('id') id: string, @Body() userUpdate: {}) {
        return {id, ...userUpdate};
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string) {
        return `User ${id} deleted`;
    }


    @Get()     // GET  /users?role=INTERN
    findAll(@Query('role') role ?: 'INTERN' | 'EMPLOYEE' | 'ADMIN') {
        return `This action returns all users with role: ${role}`;
    }

}
