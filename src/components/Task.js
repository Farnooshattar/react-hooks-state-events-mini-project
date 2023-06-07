import React from "react";

function Task({text,category,HandleDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => HandleDelete(text)}>X</button>
    </div>
  );
}

export default Task;
