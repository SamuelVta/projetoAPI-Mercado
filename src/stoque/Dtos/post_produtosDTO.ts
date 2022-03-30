import { IsNotEmpty, isNotEmpty } from "class-validator";

export class PostDTO{
    @IsNotEmpty()
    nome: string;
    @IsNotEmpty()
    quantidade: number;
    @IsNotEmpty()
    preco: number;
}