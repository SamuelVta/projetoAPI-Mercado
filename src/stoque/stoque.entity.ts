import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stoque{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @Column()
    quantidade: number;
    @Column()
    preco: number;
}