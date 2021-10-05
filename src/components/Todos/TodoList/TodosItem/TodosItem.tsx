import { Button } from "../../../Ui/Button";
import { Todo } from "../../../../store/types";

interface itemProps extends Todo {
  index: number;
  deleteTodosId: any;
}
export const TodosItem = (props: itemProps) => {
  const { index, text, id, deleteTodosId } = props;

  return (
    <li className="todos__item">
      <span className="todos__num">{index}.</span>
      <span className="todos__text">{text}</span>
      <Button handleClick={() => deleteTodosId(id)} className="todos__btn" />
    </li>
  );
};
