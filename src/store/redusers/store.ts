import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, AppState } from "./rootReducer";
import axios from "axios";
import { Todo } from "../types";

interface TodosSliceState {
  todos: Todo[];
  loading: boolean;
}

const apiUrl: string = "http://localhost:8000/todos/";

const initialState: TodosSliceState = {
  todos: [],
  loading: true,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload); // пушит todos через пост запрос
    },

    getTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload; // получает туду через get
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(({ id }) => id !== action.payload);
    },

    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
        return todo;
      });
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const selectTodos = (state: AppState) => state.todos.todos; // получаю массив из стора прокидываю его в компонент
export const { setTodo, getTodos, removeTodo, setLoading, toggleTodo } =
  todosSlice.actions;

export const saveTodo = (text: string) => async (dispatch: AppDispatch) => {
  try {
    const todo = { text, done: false };
    const response = await axios.post(apiUrl, todo);
    dispatch(setTodo(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const changeTodosIsDone =
  (done: boolean, id: number) => async (dispatch: AppDispatch) => {
    try {
      const response = await axios.patch(apiUrl + id, { done });
      dispatch(toggleTodo(response.data.id));
    } catch (error) {
      console.error(error);
    }
  };

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  try {
    const { data } = await axios.get(apiUrl);
    dispatch(getTodos(data));
    dispatch(setLoading(false));
  } catch (error) {
    console.error(error);
    dispatch(setLoading(true));
  }
};

export const deleteTodos = (id: number) => async (dispatch: AppDispatch) => {
  try {
    await axios.delete(apiUrl + id, {
      params: { id },
    });
    dispatch(removeTodo(id));
  } catch (error) {
    console.error(error);
  }
};
