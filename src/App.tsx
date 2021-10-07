import React from "react";
import { useSelector } from "react-redux";
import { Todos } from "./components/Todos/Todos";
import { selectTodos } from "./store/redusers/store";
import "./style/style.scss";

function App() {
  const todos = useSelector(selectTodos);
  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  );
}

export default App;
