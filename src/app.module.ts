import { Module } from '@nestjs/common';
import { NoteController } from './notes/notes.controller';
import { NotesService } from './notes/notes.service';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'Note-TakingApp',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
  ],
  controllers: [NoteController],
  providers: [NotesService],
})
export class AppModule {}
