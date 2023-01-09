import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterRemove } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    FullName: string;

    @Column()
    Email: string;

    @Column()
    Password: string;

    @AfterInsert()
    logInsert() {
        console.log(`Inserted user ${this.FullName} with id ${this.Id}..`)
    }
    @AfterRemove()
    logRemove() {
        console.log(`Removed user ${this.FullName} with id ${this.Id}..`)
    }

}