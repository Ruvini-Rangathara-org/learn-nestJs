import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['ADMIN', 'USER', 'INTERN'],{message: 'Role must be one of these values: ADMIN, USER, INTERN'})
    role: 'ADMIN' | 'USER' | 'INTERN';
}
