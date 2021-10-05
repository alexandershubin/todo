import {TodosItem} from "./TodosItem/TodosItem";
import React from "react";

interface Item {
    id: number,
    text: string
}

export const TodoList = (props: any) => {
    const {todos, dltTodo} = props;
    return (
        <ul className="todos__list">
            {todos.map((item: Item, index: number) => {
                return (
                    <TodosItem key={item.id}
                               index={index + 1}
                               todo={item.text}
                               id={item.id}
                               dltTodo={dltTodo}
                    />
                )
            })}
        </ul>
    )
}
