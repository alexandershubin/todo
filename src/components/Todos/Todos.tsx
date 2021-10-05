import { TodoInput } from "./TodoInput/TodoInput";
import { Todo } from "../../store/types";
import { TodoList } from "./TodoList/TodoList";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodos, fetchTodos, saveTodo } from "../../store/redusers/store";
import "./Todos.scss";

export interface TodosProps {
  todos: Todo[];
}

export const Todos = ({ todos }: TodosProps) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    todoShow();
  }, [dispatch]);

  const createTodo = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodo(e.target.value);

  const postTodo = (todo: string) => {
    dispatch(saveTodo(todo));
  };

  const todoShow = () => {
    dispatch(fetchTodos());
  };

  const deleteTodosId = (id: number) => {
    dispatch(deleteTodos(id));
  };

  const addTodos = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    todo.trim() && postTodo(todo);
    setTodo("");
  };

  return (
    <div className="todos">
      <h1 className="title-h1 title-h1--todos">Список задач</h1>
      <TodoInput todo={todo} addTodos={addTodos} createTodo={createTodo} />
      <TodoList todos={todos} deleteTodosId={deleteTodosId} />
    </div>
  );
};
