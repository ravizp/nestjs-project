import { Injectable } from '@nestjs/common';
import { NoteDto } from './dto/note.dto';

@Injectable()
export class NotesService {
  private notes: NoteDto[] = [];
  private idCount = 1;

  //add a new note
  create(title: string, content: string): NoteDto {
    const note: NoteDto = {
      id: this.idCount++,
      title,
      content,
      isDeleted: false,
    };
    this.notes.push(note);
    return note;
  }
}
