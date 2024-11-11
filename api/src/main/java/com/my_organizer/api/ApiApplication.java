package com.my_organizer.api;

import com.my_organizer.api.entity.Note;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@SpringBootApplication
@RestController
public class ApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }

    @GetMapping
    public List<Note> getNotes() {
        return List.of(
                new Note(1L, "This is the first note", LocalDate.now()),
                new Note(2L, "And this is the second note", LocalDate.now())
        );
    }
}
