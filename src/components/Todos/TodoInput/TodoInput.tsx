import React from "react";
import { Button } from "../../Ui/Button";

interface PropsInput {
  todo: string;
  addTodos: any;
  createTodo: any;
}

export const TodoInput = (props: PropsInput) => {
  const { addTodos, createTodo, todo } = props;

  return (
    <form className="form" onSubmit={addTodos}>
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
