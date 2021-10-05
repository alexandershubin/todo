import { createSelector } from 'reselect';

export const dataTodos = (state: { todos: any; }) => state.todos;

export const getTodos = createSelector(dataTodos, data => {
    return data?.todos;
});
