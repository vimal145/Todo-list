import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const initialArray = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  const [task, setTask] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && description.trim() !== '') {
      setTask([...task, { title, description }]);
      setTitle("");
      setDescription("");
    }
  };
  const deleteTask = (index) => {
    const filterdArray = task.filter((val, i) => {
      return i !== index;
    });
    setTask(filterdArray);
  };
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <>
      <div className="text-form">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Type your task here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="subBtn" type="submit">Add</button>
        </form>

        {task.map((item, index) => (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            deleteTask={deleteTask}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
