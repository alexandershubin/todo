export interface DataTodos {
  loading: boolean;
  todos: Todo;
}

export interface Todo {
  index: number;
  id: number;
  text: string;
  done: boolean;
}
