import { IsNotEmpty, isNotEmpty } from "class-validator";

export class AttDTO{
    @IsNotEmpty()
    quantidade: number;
    @IsNotEmpty()
    preco: number;
}