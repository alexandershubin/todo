export interface DataTodos {
  loading: boolean;
  todos: Todo;
}

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
