import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoqueModule } from './stoque/stoque.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"postgres",
      host:"localhost",
      port:5432,
      username: "postgres",
      password: "2404",
      database: "postgres", 
      autoLoadEntities: true,
      synchronize: true,
    }),
    StoqueModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
