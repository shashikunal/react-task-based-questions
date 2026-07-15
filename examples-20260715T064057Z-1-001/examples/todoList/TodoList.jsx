import React, { useState, useEffect } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState("");

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>todos</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          className="input"
          placeholder="Enter your todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
        />
        <ul className="todos">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={todo.completed ? "completed" : ""}
              onClick={() => toggleTodo(index)}
              onContextMenu={(e) => {
                e.preventDefault();
                deleteTodo(index);
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </form>
      <small>
        <p>Left click to toggle completed. </p>
        <p>Right click to delete todo.</p>
      </small>
    </div>
  );
};

export default TodoList;
