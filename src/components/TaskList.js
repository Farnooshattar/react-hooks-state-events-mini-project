import React from "react";
import Task from "./Task";
function TaskList({ tasks, selectedCategory, onDeleteTask }) {
   let filteredTasks;
 
  //  const handleDeleteTask = (taskId) => {
  //   filteredTasks = tasks.filter((task) => task.text !== taskId);
    
  // };
 
  if (selectedCategory === "All") {
    filteredTasks = tasks;
  } else {
    filteredTasks = tasks.filter((task) => task.category === selectedCategory);
  }

  return (
    <div className="tasks">
      {filteredTasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDeleteTask} />
      ))}
    </div>
  );
}
export default TaskList;



