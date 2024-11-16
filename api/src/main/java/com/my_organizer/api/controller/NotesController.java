package com.my_organizer.api.controller;

import com.my_organizer.api.entity.Note;
import com.my_organizer.api.service.NotesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="api/notes")
public class NotesController {
    private final NotesService notesService;

    @Autowired
    public NotesController(NotesService notesService) {
        this.notesService = notesService;
    }

    @GetMapping
    public List<Note> getNotes() {
        return notesService.getNotes();
    }

    @PostMapping
    public Note createNote(@RequestBody Note note){
        return notesService.createNote(note);
    }

    @DeleteMapping(path="{noteId}")
    public void deleteNote(@PathVariable("noteId") Long id) {
        notesService.deleteNote(id);
    }
}
