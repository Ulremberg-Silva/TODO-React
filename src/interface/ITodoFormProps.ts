import { FormEvent, Dispatch, SetStateAction } from "react";
export interface ITodoFormProps {
    todo: string;
    setTodo: Dispatch<SetStateAction<string>>;
    handleAdd: (e: FormEvent) => void;
  }