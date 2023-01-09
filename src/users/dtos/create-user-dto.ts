import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";
import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString({message:'Fullname must be a string'})
    @ApiProperty() //for swagger input type recognization
    fullname: string;
    
    @ApiProperty()
    @IsEmail()
    email: string;
    
    @ApiProperty()
    @IsString()
    password: string;
}