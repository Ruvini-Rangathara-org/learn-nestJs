import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": 'John Doe',
            "email": 'john@gmail.com',
            "role": 'INTERN'
        },{
            "id": 2,
            "name": 'Jane Doe',
            "email": 'jane@gmail.com',
            "role": 'ADMIN'
        },{
            "id": 3,
            "name": 'John Smith',
            "email": 'smith@gmail.com',
            "role": 'USER'
        },{
            "id": 4,
            "name": 'Mary Smith',
            "email": 'mary@gmail.com',
            "role": 'ADMIN'
        },{
            "id": 5,
            "name": 'Charlie Doe',
            "email": 'charlie@gmail.com',
            "role": 'USER'
        }
    ]

    findAll(role?: 'ADMIN' | 'USER' | 'INTERN' ) {
        if(role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        if(!user){
            throw new NotFoundException(`User with id ${id} not found`)
        }
        return user;
    }

    create(user: CreateUserDto) {
        const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updatedUser: UpdateUserDto) {
        this.users = this.users.map(user => {
            if(user.id === id) {
                return {
                    ...user,
                    ...updatedUser
                }
            }
            return user;
        });
        return this.findOne(id);
    }

    delete(id: number) {
        const user = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return user;
    }


}
