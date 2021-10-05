import {Button} from "../../../Ui/Button";

export const TodosItem = (props: any) => {
    const {index, todo, id, dltTodo} = props;

    return (
        <li className="todos__item">
            <span className="todos__num">{index}.</span>
            <span className="todos__text">{todo}</span>
            <Button handleClick={() => dltTodo(id)} className="todos__btn"/>
        </li>
    )
}
