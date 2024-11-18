package com.my_organizer.api.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table
public class Task {
    @Id
    @SequenceGenerator(name="task_sequence", sequenceName = "note_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "note_sequence")
    private Long id;
    private String name;
    private String description;
    private LocalDateTime createdAt;
    private Boolean done;

    public Task() {
    }

    public Task(Long id, String name, String description, LocalDateTime createdAt, Boolean done) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.done = done;
    }

    public Task(String name, String description, LocalDateTime createdAt, Boolean done) {
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.done = done;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }
}
