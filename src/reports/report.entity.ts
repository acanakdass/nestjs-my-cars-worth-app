import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Report{
    @PrimaryGeneratedColumn()
    Id:number;
    
    @Column()
    Price:number;
}