import {TodoInput} from "./TodoInput/TodoInput";
import {Todo} from "../../store/types";
import {TodoList} from "./TodoList/TodoList";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {deleteTodos, fetchTodos, saveTodo} from "../../store/redusers/store";

interface TodosProps {
    todos: Todo[];
}

export const Todos = ({todos}: TodosProps) => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const createTodo = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);

    const postTodo = (todo: string) => {
        dispatch(saveTodo(todo));
    }

    const todoShow = () => {
        dispatch(fetchTodos());
    }

    const deleteTodosId = (id: number) => {
        dispatch(deleteTodos(id))
    }

    const addTodos = (event: any) => {
        event.preventDefault();
        todo.trim() && postTodo(todo)
        setTodo('');
    }

    useEffect(() => {
        todoShow();
    }, [dispatch]);

    return (
        <div className="todos">
            <h1 className="title-h1 title-h1--todos">Список задач</h1>
            <TodoInput todos={todos}
                       todo={todo}
                       addTodos={addTodos}
                       createTodo={createTodo}/>
            <TodoList todos={todos}
                      dltTodo={deleteTodosId}
            />
        </div>
    )
}
