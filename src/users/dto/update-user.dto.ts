import { IsString, IsEmail } from 'class-validator';

export class UpdateUserDto {
    @IsString()
    name?: string;

    @IsString()
    lastName?: string;

    @IsEmail()
    email?: string;
}
