import { Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { Body, Delete, Param } from '@nestjs/common/decorators';
import { UsersService } from './users.service';
import { ApiProperty } from '@nestjs/swagger';

@Controller('auth')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Post('/signup')
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto)
        this.usersService.create(createUserDto)
    }
    @Delete('/delete-user/:id')
    deleteUser(@Param('id') id :number) {
        console.log(id)
        return this.usersService.delete(id)
    }
}
