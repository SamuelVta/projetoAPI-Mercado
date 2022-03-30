import { Body, Injectable } from '@nestjs/common';
import { PostDTO } from './Dtos/post_produtosDTO';
import { AttDTO } from './Dtos/att_produtosDTO';
import { StoqueRepository } from './stoque.repository';

@Injectable()
export class StoqueService {
    
    constructor(private stoqueRepository: StoqueRepository) {}

    Lista_stoque(){
        return this.stoqueRepository.Lista_stoque()
    }

    Produto_stoque(id){
        return this.stoqueRepository.Produto_stoque(id)
    }

    Postar_produto(PostDTO: PostDTO){
        return this.stoqueRepository.Postar_produto(PostDTO)
    }

    Apagar_produto(id){
        return this.stoqueRepository.Apagar_produto(id)
    }

    Alterar_produto(id ,AttDTO: AttDTO){
        return this.stoqueRepository.Alterar_produto(id, AttDTO)
    }
}
