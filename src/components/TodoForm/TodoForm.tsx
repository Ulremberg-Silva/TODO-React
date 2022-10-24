import React, { useRef } from "react";
import { ITodoFormProps } from "../../interface/ITodoFormProps";
import Input from "../../components/Input/Input"
import Button from "../Button/Button";
import "../style.css"
export default function TodoForm({ todo, setTodo, handleAdd }: ITodoFormProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <Input
        type="input"
        inputRef={inputRef}
        value={todo}
        onChange={(value) => setTodo(value)}
        placeholder="Enter Item"
      />
      <Button className="buttonSubmit" type="submit">Submit</Button>
    </form>
  );
}
