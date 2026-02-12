package com.todo_api.todoapp.repository;

import com.todo_api.todoapp.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
