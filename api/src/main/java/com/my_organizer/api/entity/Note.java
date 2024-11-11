package com.my_organizer.api.entity;

import java.time.LocalDate;

public class Note {
    private Long id;
    private String content;
    private LocalDate creationDate;

    public Note() {
    }

    public Note(Long id, String content, LocalDate creationDate) {
        this.id = id;
        this.content = content;
        this.creationDate = creationDate;
    }

    public Note(String content, LocalDate creationDate) {
        this.content = content;
        this.creationDate = creationDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    @Override
    public String toString() {
        return "Note{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", creationDate=" + creationDate +
                '}';
    }
}
