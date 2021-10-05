import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch, AppState} from "./rootReducer";
import axios from "axios";
import {Todo} from "../types";

interface TodosSliceState {
    todos: Todo[];
    loading: boolean
}

const apiUrl: string = 'http://localhost:8000/todos/';

const initialState: TodosSliceState = {
    todos: [],
    loading: false
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload); // пушит todos через пост запрос
        },

        setTodos: (state, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload; // получает туду через get
        },

        removeTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(({id}) => id !== action.payload);
        },

        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const selectTodos = (state: AppState) => state.todos.todos;
export const {addTodo, setTodos, removeTodo, setLoading} = todosSlice.actions;

export const saveTodo = (text: string) => async (dispatch: AppDispatch) => {
    try {
        const todo = {text, done: false}
        const response = await axios.post(apiUrl, todo)
        dispatch(addTodo(response.data))
    } catch (error) {
        console.error(error);
    }

}

export const fetchTodos = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true));

        const {data} = await axios.get(apiUrl);

        dispatch(setTodos(data));
        dispatch(setLoading(false));
    } catch (err: any) {
        dispatch(setLoading(false));
    }
}

export const deleteTodos = (id: number) => async (dispatch: AppDispatch) => {
    try {
        await axios.delete(apiUrl + id, {
            params: {id}
        });
        dispatch(removeTodo(id));
    } catch (e) {
        console.error(e);
    }
}
