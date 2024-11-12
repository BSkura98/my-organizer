package com.my_organizer.api.service;

import com.my_organizer.api.entity.Note;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class NotesService {
    public List<Note> getNotes() {
        return List.of(
                new Note(1L, "This is the first note", LocalDate.now()),
                new Note(2L, "And this is the second note", LocalDate.now())
        );
    }
}
