import React from "react";
import Task from "./Task"
import {v4 as uuidv4} from "uuid"
function TaskList({tasks,deleteAction}) {
  return (
    <div className="tasks">
      {tasks.map((task) => <Task key={uuidv4()} text={task.text} category= {task.category} HandleDelete={deleteAction}/>)}
    </div>
  );
}

export default TaskList;
