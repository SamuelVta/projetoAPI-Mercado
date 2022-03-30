import {EntityRepository, Repository } from "typeorm";
import { PostDTO } from "./Dtos/post_produtosDTO";
import { AttDTO } from './Dtos/att_produtosDTO';
import { Stoque } from "./stoque.entity";
import { NotFoundException } from "@nestjs/common";

@EntityRepository(Stoque)
export class StoqueRepository extends Repository<Stoque>{

    Lista_stoque(){
       return this.createQueryBuilder('stoque').getMany()
    }

    Produto_stoque(id){
        return this.findOne(id)
    }

    Postar_produto(PostDTO : PostDTO){
        const {nome, quantidade, preco} = PostDTO
        let produto = this.create({
            nome,
            quantidade,
            preco,
        })
        this.save(produto)
        return produto
    }

    Apagar_produto(id){
        if(!id)
            throw new NotFoundException()
            
        return this.delete(id)
    }

    async Alterar_produto(id, AttDTO: AttDTO){
        const {quantidade, preco} = AttDTO

        const produto = await this.Produto_stoque(id)

        if(!produto)
            throw new NotFoundException()

        produto.preco = preco
        produto.quantidade = quantidade

        return this.save(produto)
    }

}