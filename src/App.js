import React, { useState, useRef } from "react";
import "./app.css";
import { Todo } from "./components/Todo";
import date from "date-and-time";

function App() {
  const [ToDo, setToDo] = useState([]);
  const inputRef = useRef();

  // handles

  const handleSetToDo = () => {
    let form = date.compile("YYYY-MM-DD/ HH:mm:ss");
    let time = date.format(new Date(), form);
    let listModel = {
      id: ToDo.length === 0 ? 1 : ToDo[ToDo.length - 1].id + 1,
      message: inputRef?.current?.value,
      completed: false,
      createdAt: time,
    };
    setToDo([...ToDo, listModel]);
  };

  const handleComplete = (id) => {
    setToDo(
      ToDo.map((data, key) => {
        if (data?.id === id) {
          return { ...data, completed: !data?.completed };
        } else {
          return data;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setToDo(ToDo.filter((key) => key.id !== id));
  };

  // handles

  return (
    <div className="div">
      {/* head */}
      <h2 className="heading">ToDo List.</h2>
      {/* input */}
      <div className="taskRowi">
        <input className="inpField" type="text" ref={inputRef} />
        <button className="trBTN" type="submit" onClick={handleSetToDo}>
          ADD
        </button>
      </div>
      {/* newtask */}
      {ToDo.map((data, key) => {
        return (
          <Todo
            key={key}
            data={data}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        );
      })}
    </div>
  );
}

export default App;
