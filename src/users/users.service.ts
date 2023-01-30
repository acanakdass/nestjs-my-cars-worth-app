import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user-dto';
import { Request } from 'express';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) { }

    create(userCreateDto: CreateUserDto) {
        let entity = new User();
        entity.Email = userCreateDto.email;
        entity.FullName = userCreateDto.fullname;
        entity.Password = userCreateDto.password;
        const user = this.repo.create(entity)
        return this.repo.save(user);
    }
    async delete(id: number) {
        try {
            var user = await this.getById(id);
            var res = await this.repo.remove(user)
            return res
        } catch (error) {
            console.log(error.message)
        }
        return this.repo.save(user);
    }
    async getById(id: number) {
        var user = await this.repo.findOneBy({ Id: id })
        return user;
    }
    async getAll(): Promise<User[]> {
        var users = await this.repo.find();
        return users;
    }
    async update(id: number, attrs: Partial<User>) {
        var user = await this.getById(id);
        if (!user)
            throw new Error('User Not Found!');
        Object.assign(user, attrs);
        return this.repo.save(user);
    }
}
