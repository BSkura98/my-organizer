package com.my_organizer.api.controller;

import com.my_organizer.api.entity.Task;
import com.my_organizer.api.service.TasksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path="api/tasks")
public class TasksController {
    private final TasksService tasksService;

    @Autowired
    public TasksController(TasksService tasksService) {
        this.tasksService = tasksService;
    }

    @GetMapping
    public List<Task> getTasks() {
        return tasksService.getTasks();
    }

    @PostMapping
    public Task createTask(@RequestBody Task task){
        return tasksService.createTask(task);
    }

    @PatchMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Map<String, Object> fields){
        return tasksService.updateTask(id, fields);
    }

    @DeleteMapping(path="{taskId}")
    public void deleteTask(@PathVariable("taskId") Long id) {
        tasksService.deleteTask(id);
    }
}
