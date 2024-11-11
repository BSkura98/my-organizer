package com.my_organizer.api.controller;

import com.my_organizer.api.entity.Note;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(path="api/notes")
public class Notes {
    @GetMapping
    public List<Note> getNotes() {
        return List.of(
                new Note(1L, "This is the first note", LocalDate.now()),
                new Note(2L, "And this is the second note", LocalDate.now())
        );
    }
}
