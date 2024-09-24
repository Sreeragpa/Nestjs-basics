// Data Transfer Object dto (pattern Used)

import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}

export class UpdateUserDto{
    @IsNotEmpty()
    @IsEmail()
    email: string
}