import React, { useState, FormEvent } from "react";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";
import { ITask } from "../../interface/ITask";
import "./style.css";

export function HomePage() {
  const [todos, setTodos] = useState<ITask[]>([]);

  const [todo, setTodo] = useState<string>("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (todo.trim().length !== 0) {
      const createTodoItem = {
        id: new Date().getTime().toString(),
        name: todo,
      };

      setTodos([...todos].concat(createTodoItem));
      setTodo("");
    }

    setTodo("");
  }

  return (
    <div className="todo-form">
      <h1 className="head-task">Task</h1>
      <p>You have {todos.length} Todos </p>
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoForm todo={todo} setTodo={setTodo} handleAdd={handleSubmit} />
    </div>
  );
}
