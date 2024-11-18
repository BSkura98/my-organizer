package com.my_organizer.api.service;

import com.my_organizer.api.entity.Note;
import com.my_organizer.api.repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ReflectionUtils;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@Service
public class NotesService {

    private final NotesRepository notesRepository;

    @Autowired
    public NotesService(NotesRepository notesRepository) {
        this.notesRepository = notesRepository;
    }

    public List<Note> getNotes() {
        return notesRepository.findAll();
    }

    public Note createNote(Note note) {
        return notesRepository.save(note);
    }

    public void deleteNote(Long id) {
        boolean exists = notesRepository.existsById(id);
        if(!exists){
            throw new IllegalStateException("Note with id " + id + "does not exist");
        }
        notesRepository.deleteById(id);
    }

    public Note updateNote(Long id, Map<String, Object> fields) {
        Note note = notesRepository
                .findById(id)
                .orElseThrow(()-> new IllegalStateException("Note with id " + id + " does not exist"));

        fields.forEach((key, value) -> {
            if(!(key.equals("id"))){
                Field field = ReflectionUtils.findField(Note.class, key);
                if (field != null) {
                    field.setAccessible(true);
                    ReflectionUtils.setField(field, note, value);
                }
            }
        });
        return notesRepository.save(note);
    }
}
