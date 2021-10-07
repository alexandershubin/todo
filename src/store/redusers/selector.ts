import { createSelector } from "reselect";
import { DataTodos } from "../types";

export const dataTodos = (state: { todos: DataTodos }) => state.todos;

export const getLoading = createSelector(dataTodos, (data) => {
  return data?.loading;
});

export const getTodosDone = createSelector(dataTodos, (data) => {
  return data?.todos;
});
