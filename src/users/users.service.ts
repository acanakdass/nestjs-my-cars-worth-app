import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user-dto';

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
            var user = await this.repo.findOneOrFail({ where: { Id: id } })
            var res =await this.repo.remove(user)
            return res
        } catch (error) {
            console.log(error.message)
        }
        return this.repo.save(user);
    }
}
