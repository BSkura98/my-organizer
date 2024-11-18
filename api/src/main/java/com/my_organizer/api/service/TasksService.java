package com.my_organizer.api.service;

import com.my_organizer.api.entity.Task;
import com.my_organizer.api.repository.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@Service
public class TasksService {
    private final TasksRepository tasksRepository;

    @Autowired
    public TasksService(TasksRepository tasksRepository) {
        this.tasksRepository = tasksRepository;
    }

    public List<Task> getTasks() {
        return tasksRepository.findAll();
    }

    public Task createTask(Task task) {
        return tasksRepository.save(task);
    }

    public void deleteTask(Long id) {
        boolean exists = tasksRepository.existsById(id);
        if(!exists){
            throw new IllegalStateException("Task with id " + id + "does not exist");
        }
        tasksRepository.deleteById(id);
    }

    public Task updateTask(Long id, Map<String, Object> fields) {
        Task task = tasksRepository
                .findById(id)
                .orElseThrow(()-> new IllegalStateException("Task with id " + id + " does not exist"));

        fields.forEach((key, value) -> {
            if(!(key.equals("id"))){
                Field field = ReflectionUtils.findField(Task.class, key);
                if (field != null) {
                    field.setAccessible(true);
                    ReflectionUtils.setField(field, task, value);
                }
            }
        });
        return tasksRepository.save(task);
    }
}
