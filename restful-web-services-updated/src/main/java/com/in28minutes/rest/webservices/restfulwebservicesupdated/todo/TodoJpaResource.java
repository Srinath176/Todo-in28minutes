package com.in28minutes.rest.webservices.restfulwebservicesupdated.todo;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.rest.webservices.restfulwebservicesupdated.todo.repository.TodoRepository;

@RestController
public class TodoJpaResource {

	private TodoService service;
	private TodoRepository repository;

	public TodoJpaResource(TodoService service, TodoRepository repository) {
		super();
		this.service = service;
		this.repository = repository;
	}

	@GetMapping("users/{username}/todos")
	public List<Todo> retreiveTodos(@PathVariable String username) {

		return repository.findByUsername(username);
	}

	@GetMapping("users/{username}/todos/{id}")
	public Todo retreiveTodosById(@PathVariable String username, @PathVariable int id) {

		return repository.findById(id).get();
	}

	@DeleteMapping("users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodos(@PathVariable String username, @PathVariable int id) {
		repository.deleteById(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping("users/{username}/todos/{id}")
	public Todo updateTodos(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo) {
		repository.save(todo);
		return todo;
	}

	@PostMapping("users/{username}/todos")
	public Todo createTodos(@PathVariable String username, @RequestBody Todo todo) {
		
		todo.setUsername(username);
		todo.setId(null);
		
	  return repository.save(todo);
		
	}
	
	
	

}
