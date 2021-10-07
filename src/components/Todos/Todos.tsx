import { TodoInput } from "./TodoInput/TodoInput";
import { Todo } from "../../store/types";
import { TodoList } from "./TodoList/TodoList";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTodosIsDone,
  deleteTodos,
  fetchTodos,
  saveTodo,
} from "../../store/redusers/store";
import "./Todos.scss";
import { getLoading } from "../../store/redusers/selector";
import Loader from "../Ui/Loader/Loader";

export interface TodosProps {
  todos: Todo[];
}

export const Todos = ({ todos }: TodosProps) => {
  const [todo, setTodo] = useState<string>("");
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const createTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addTodos = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    todo.trim() && dispatch(saveTodo(todo));
    setTodo("");
  };

  const toggleIsDone = (done: boolean, id: number) => {
    dispatch(changeTodosIsDone(done, id));
  };

  const deleteTodosId = (id: number) => {
    dispatch(deleteTodos(id));
  };

  return (
    <div className="todos">
      <h1 className="title-h1 title-h1--todos">Список задач</h1>
      {!loading ? (
        <>
          <TodoInput todo={todo} addTodos={addTodos} createTodo={createTodo} />
          <TodoList
            todos={todos}
            deleteTodosId={deleteTodosId}
            changeDone={toggleIsDone}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
