import React from "react";

export const Todo = (props) => {
  return (
    <div className="taskRow">
      <h6>{props?.data?.createdAt}</h6>
      <div className="task">
        <p
          style={{
            textDecoration: props?.data?.completed ? "line-through" : "none",
          }}
        >
          {props?.data?.message}
        </p>
        <button
          className="actionBTN"
          onClick={() => props?.handleComplete(props?.data?.id)}
        >
          Done
        </button>
        <button
          className="actionBTN"
          onClick={() => props?.handleDelete(props?.data?.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
