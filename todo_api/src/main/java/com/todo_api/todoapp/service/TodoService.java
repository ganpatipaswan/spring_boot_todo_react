package com.todo_api.todoapp.service;

import com.todo_api.todoapp.model.Todo;
import com.todo_api.todoapp.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {

    private final TodoRepository repo;

    public TodoService(TodoRepository repo) {
        this.repo = repo;
    }

    public List<Todo> getAllTodos() {
        return repo.findAll();
    }

    public Todo saveTodo(Todo todo) {
        return repo.save(todo);
    }

    public Todo updateTodo(Long id, Todo todo) {
        Todo existing = repo.findById(id).orElseThrow();
        existing.setTitle(todo.getTitle());
        existing.setDescription(todo.getDescription());
        existing.setCompleted(todo.isCompleted());
        return repo.save(existing);
    }

    public void deleteTodo(Long id) {
        repo.deleteById(id);
    }
}
