// Declaring type of props - see "Typing Component Props" for more examples
// type AppProps = {
// message: string; };
/* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
//   const App = ({ message }: AppProps) => <div>{message}</div>;

// you can choose annotate the return type so an error is raised if you accidentally return some other type
//   const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;

// you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
//   const App = ({ message }: { message: string }) => <div>{message}</div>;

interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}

interface ITodoList {
  todos: TodoType[];
  toggleTodo: ToggleFnc;
  deleteTodo: DeleteFnc;
}

interface IListItem {
  item: TodoType;
  toggleTodo: ToggleFnc;
  deleteTodo: DeleteFnc;
}

type AddFnc = (text: string) => void;

type ToggleFnc = (item: TodoType) => void;

type DeleteFnc = (id: string | number) => void;
