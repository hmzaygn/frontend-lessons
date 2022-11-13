import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todo.css";
// import { useSelector } from "react-redux";

const Todo = () => {
  // const deneme = useSelector((state) => state.todo.todoList);
  // console.log(deneme);

  return (
    <div className="app">
      <h2>Todo With Redux</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;
