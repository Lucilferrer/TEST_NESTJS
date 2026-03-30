import { isEmail, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDTO{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}

export class SignUpDTO extends AuthDTO{
    @IsString()
    @IsNotEmpty()
    first_name: string;

    @IsString()
    last_name?: string; 
}