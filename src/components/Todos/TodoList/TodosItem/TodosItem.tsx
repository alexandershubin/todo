import { Button } from "../../../Ui/Button";
import { Todo } from "../../../../store/types";
import Input from "../../../Ui/Input/Input";
import React, { useEffect, useState } from "react";
import { changeTodosText, fetchTodos } from "../../../../store/redusers/store";
import { useDispatch } from "react-redux";

interface itemProps extends Todo {
  index: number;
  changeDone(b: boolean, id: number): void;
  deleteTodosId(onclick: number): void;
}

export const TodosItem = (props: itemProps) => {
  const { index, text, id, deleteTodosId, done, changeDone } = props;

  const [isOpenInput, setIsOpenInput] = useState<boolean>(false);
  const [todoText, setTodoText] = useState<string>(text || "");

  const createTodos = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch, isOpenInput]);

  const handleInputBtn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpenInput(!isOpenInput);
    setTodoText(todoText);
    dispatch(changeTodosText(todoText, id));
  };

  return (
    <li className="todos__item">
      <span className="todos__num">{index}.</span>
      <Input
        className="todos-input"
        type="checkbox"
        htmlFor={todoText}
        checked={done}
        changeInput={() => changeDone(!done, id)}
      />
      {isOpenInput ? (
        <form
          className="form-change"
          onSubmit={(event) => handleInputBtn(event)}
        >
          <Input
            className="todos-change"
            type="text"
            htmlFor={todoText}
            value={todoText}
            checked={done}
            changeInput={createTodos}
          />
        </form>
      ) : (
        <span className={done ? "todos__text through" : "todos__text"}>
          {text}
        </span>
      )}
      <Button handleClick={handleInputBtn} className="todos__change">
        {isOpenInput ? "Сохранить" : "Изменить"}
      </Button>
      <Button handleClick={() => deleteTodosId(id)} className="todos__btn" />
    </li>
  );
};
