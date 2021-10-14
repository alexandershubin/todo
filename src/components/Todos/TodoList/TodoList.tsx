import { TodosItem } from "./TodosItem/TodosItem";
import React, { DataHTMLAttributes, useState } from "react";
import { Todo } from "../../../store/types";
import { Button } from "../../Ui/Button";

export interface Items {
  todos: Todo[];
  changeDone(b: boolean, id: number): void;
  deleteTodosId(onclick: number): void; // ?
}

export const TodoList = (props: Items) => {
  const { deleteTodosId, changeDone } = props;
  const [filter, setFilter] = useState("");
  const todos = [...props.todos];

  const sortTodoList = () => {
    switch (filter) {
      case "actual":
        return todos.filter((todo) => !todo.done);
      case "completed":
        return todos.filter((todo) => todo.done);
      case "all":
        return todos.slice(0, todos.length);
      default:
        return todos;
    }
  };

  const onFilterClick = ({ target }: any) => {
    // ? TS
    setFilter(target.dataset.filter);
  };

  return (
    <>
      <div className="todos-btn">
        <Button
          className="btn todos-btn__all"
          dataAttr="all"
          handleClick={onFilterClick}
        >
          Все
        </Button>
        <Button
          className="btn todos-btn__ready"
          dataAttr="completed"
          handleClick={onFilterClick}
        >
          Выполненные
        </Button>
        <Button
          className="btn todos-btn__progress"
          dataAttr="actual"
          handleClick={onFilterClick}
        >
          В работе
        </Button>
      </div>
      <ul className="todos__list">
        {sortTodoList().map((item, index: number) => {
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
    </>
  );
};
