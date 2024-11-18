package com.my_organizer.api.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table
public class Note {
    @Id
    @SequenceGenerator(name="note_sequence", sequenceName = "note_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "note_sequence")
    private Long id;
    private String content;
    private LocalDateTime createdAt;

    public Note() {
    }

    public Note(Long id, String content, LocalDateTime createdAt) {
        this.id = id;
        this.content = content;
        this.createdAt = createdAt;
    }

    public Note(String content, LocalDateTime createdAt) {
        this.content = content;
        this.createdAt = createdAt;
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

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "Note{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}
