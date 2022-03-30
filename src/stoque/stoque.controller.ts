import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PostDTO } from './Dtos/post_produtosDTO';
import { AttDTO } from './Dtos/att_produtosDTO';
import { StoqueService } from './stoque.service';
import { identity } from 'rxjs';

@Controller('stoque')
export class StoqueController {

    constructor(private stoqueService: StoqueService) {}

    @Get()
    Lista_stoque(){
        return this.stoqueService.Lista_stoque();
    }

    @Get("/:id")
    Produto_stoque(@Param('id') id){
        return this.stoqueService.Produto_stoque(id);
    }

    @Post()
    Postar_produto(@Body()PostDTO: PostDTO){
        return this.stoqueService.Postar_produto(PostDTO);
    }

    @Delete("/:id")
    Apagar_produto(@Param('id') id){
        return this.stoqueService.Apagar_produto(id)
    }

    @Put("/:id")
    Alterar_produto(@Param("id") id, @Body() AttDTO: AttDTO){
        return this.stoqueService.Alterar_produto(id, AttDTO);
    }
}
