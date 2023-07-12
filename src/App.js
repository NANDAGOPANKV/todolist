import React from "react";
import "./app.css";

export const App = () => {
  return (
    <div className="div">
      {/* head */}
      <h2 className="heading">ToDo List.</h2>
      {/* input */}
      <div className="taskRowi">
        <input className="inpField" type="text" />
        <button className="trBTN">Add</button>
      </div>
      {/* newtask */}
      <div className="taskRow">
        <div className="task">
          <p>Lorem ipsum dolor</p>
          <button className="actionBTN">Done</button>
          <button className="actionBTN">Delete</button>
        </div>
        <div className="task">
          <p>Lorem ipsum dolor</p>
          <button className="actionBTN">Done</button>
          <button className="actionBTN">Delete</button>
        </div>
        <div className="task">
          <p>Lorem ipsum dolor</p>
          <button className="actionBTN">Done</button>
          <button className="actionBTN">Delete</button>
        </div>
      </div>
    </div>
  );
};
