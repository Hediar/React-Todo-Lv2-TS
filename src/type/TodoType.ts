export interface TodoTypes {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}

export interface TodoState {
  todos: TodoTypes[];
}

export interface ListIsDone {
  listIsDone: boolean;
}
