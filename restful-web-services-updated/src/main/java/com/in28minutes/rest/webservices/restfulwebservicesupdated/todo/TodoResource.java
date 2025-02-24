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

//@RestController
public class TodoResource {

	private TodoService service;

	public TodoResource(TodoService service) {
		super();
		this.service = service;
	}

	@GetMapping("users/{username}/todos")
	public List<Todo> retreiveTodos(@PathVariable String username) {

		return service.findByUsername(username);
	}

	@GetMapping("users/{username}/todos/{id}")
	public Todo retreiveTodosById(@PathVariable String username, @PathVariable int id) {

		return service.findById(id);
	}

	@DeleteMapping("users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodos(@PathVariable String username, @PathVariable int id) {
		service.deleteById(id);
		return ResponseEntity.noContent().build();
	}

	@PutMapping("users/{username}/todos/{id}")
	public Todo updateTodos(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo) {
		service.updateTodo(todo);
		return todo;
	}

	@PostMapping("users/{username}/todos")
	public Todo createTodos(@PathVariable String username, @RequestBody Todo todo) {
		Todo createTodo = service.addTodo(username, todo.getDescription(), todo.getTargetDate(), todo.isDone());
		return createTodo;
	}
	
	
	

}
