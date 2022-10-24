import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { ITodoListProps } from "../../interface/ITodoListProps";
import Input from "../../components/Input/Input";
import Button from "../Button/Button";
import "../style.css";

export default function TodoList({ todos, setTodos }: ITodoListProps) {
  const [todoEditingItem, setTodoEditingItem] = useState<string>("");

  const [todoIdItem, setTodoIdItem] = useState<string>("");

  function deleteTodoItem(id: string) {
    const todosAfterDelete = [...todos].filter((todo) => todo.id !== id);

    setTodos(todosAfterDelete);
  }

  function editTodoItem(id: string) {
    if(todoEditingItem.trim().length !== 0){
      const updateTodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.name = todoEditingItem;
        }
        return todo;
      });
  
      setTodos(updateTodos);
      
    }
    setTodoIdItem("");
      setTodoEditingItem("");
    
  }

  function cancelEditTodoItem() {
    setTodoIdItem("");
    setTodoEditingItem("");
  }

  function editTodo(id: string) {
    setTodoIdItem(id);
    [...todos].forEach((todo) => {
      if (todo.id === id) {
        setTodoEditingItem(todo.name);
      }
    });
  }

  const renderTodoList = (): JSX.Element[] => {
    return todos.map((todo) => {
      return (
        <div key={todo.id} className="listItem">
          {todoIdItem === todo.id ? (
            <Input
              type="text"
              onChange={(value) => setTodoEditingItem(value)}
              value={todoEditingItem}
            />
          ) : (
            <div>{todo.name}</div>
          )}

          {todoIdItem === todo.id ? (
            <div>
              <Button
                className="editItem"
                onClick={() => editTodoItem(todo.id)}
              >
                Submit Edit
              </Button>
              <Button
                className="cancelEditItem"
                onClick={() => cancelEditTodoItem()}
              >
                Cancel Edit
              </Button>
            </div>
          ) : (
            <EditIcon
              className="editIconTodoList"
              onClick={() => editTodo(todo.id)}
            />
          )}
          <ClearIcon
            className="clearIconTodoList"
            onClick={() => deleteTodoItem(todo.id)}
          />
        </div>
      );
    });
  };

  return <>{renderTodoList()}</>;
}
