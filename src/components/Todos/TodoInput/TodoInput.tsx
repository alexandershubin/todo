import React from "react";
import {Button} from "../../Ui/Button";

export const TodoInput = (props: any) => {
    const {addTodos, createTodo, todo} = props;

    return (
        <form className="form" onSubmit={addTodos}>
            <input
                className="form__input"
                value={todo}
                type="text"
                autoFocus
                placeholder="название задачи"
                onChange={(e) => createTodo(e)}
            />
            <Button className="form__btn">Создать</Button>
        </form>
    )
}
