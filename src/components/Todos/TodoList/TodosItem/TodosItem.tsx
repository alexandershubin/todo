import { Button } from "../../../Ui/Button";
import { Todo } from "../../../../store/types";
import Input from "../../../Ui/Input/Input";
import React from "react";

interface itemProps extends Todo {
  index: number;
  deleteTodosId: any;
  changeDone: any;
}

export const TodosItem = (props: itemProps) => {
  const { index, text, id, deleteTodosId, done, changeDone } = props;

  return (
    <li className="todos__item">
      <span className="todos__num">{index}.</span>
      <span className="todos__text">{text}</span>
      <Input
        type="checkbox"
        htmlFor={id}
        checked={done}
        changeDone={() => changeDone(!done, id)}
      />
      <Button handleClick={() => deleteTodosId(id)} className="todos__btn" />
    </li>
  );
};
