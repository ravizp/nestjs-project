import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { NotesService } from './notes.service';

@ApiTags('Notes')
@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NotesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new note' })
  @ApiBody({ schema: { example: { title: 'New Note', content: 'Isi Note' } } })
  create(@Body('title') title: string, @Body('content') content: string) {
    return this.noteService.create(title, content);
  }
}
