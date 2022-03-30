import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoqueController } from './stoque.controller';
import { StoqueRepository } from './stoque.repository';
import { StoqueService } from './stoque.service';


@Module({
  imports:[
    TypeOrmModule.forFeature([StoqueRepository])
  ],
  controllers: [StoqueController],
  providers: [StoqueService]
})
export class StoqueModule {}
