import React from "react";
import { Button } from "../../Ui/Button";

interface PropsInput {
  todo: string;
  createTodo(onclick: React.ChangeEvent<HTMLInputElement>): void;
  addTodos(event: React.FormEvent<HTMLFormElement>): void;
}

export const TodoInput = (props: PropsInput) => {
  const { addTodos, createTodo, todo } = props;

  return (
    <form className="form" onSubmit={(event) => addTodos(event)}>
      <input
        className="form__input"
        value={todo}
        type="text"
        autoFocus
        placeholder="название задачи"
        onChange={(e) => createTodo(e)}
      />
      <Button className="form__btn">Создать</Button>
    </form>
  );
};
