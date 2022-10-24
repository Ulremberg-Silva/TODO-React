import { SetStateAction, Dispatch } from "react";
import { ITask } from "./ITask";

export interface ITodoListProps {
  todos: ITask[];
  setTodos: Dispatch<SetStateAction<ITask[]>>;
}
