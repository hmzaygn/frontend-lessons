import React, { useEffect, useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([]);

  const url = `https://63518212dfe45bbd55c21bfd.mockapi.io/api/task`;

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  //! CRUD - READ
  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
    // console.log(data);
  };

  useEffect(() => {
    getTask();
  });
  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button
        variant="danger"
        onClick={() => {
          toggle();
        }}
      >
        {text}
      </Button>

      {isOpen && <AddTask getTask={getTask} />}

      <TaskList task={task} getTask={getTask} />
    </div>
  );
};

export default Home;
