import { TodosItem } from "./TodosItem/TodosItem";
import React from "react";
import { Todo } from "../../../store/types";

export interface Items {
  todos: Todo[];
  changeDone(b: boolean, id: number): void;
  deleteTodosId(onclick: number): void; // ?
}

export const TodoList = (props: Items) => {
  const { todos, deleteTodosId, changeDone } = props;
  return (
    <ul className="todos__list">
      {todos.map((item, index: number) => {
        return (
          <TodosItem
            key={item.id}
            index={index + 1}
            text={item.text}
            id={item.id}
            done={item.done}
            deleteTodosId={deleteTodosId}
            changeDone={changeDone}
          />
        );
      })}
    </ul>
  );
};
