import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setselectedCategory] = useState("All");

  const onDeleteAction = (taskTEXT) => {
    const updatedTasks = tasks.filter((task) => task.text !== taskTEXT);
    setTasks(updatedTasks);
  };
  const handleCategoryFilter = (category) => {
    setselectedCategory(category)
    if (category === "All") setTasks(TASKS);
    else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setTasks(filteredTasks);
    }
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryFilter={handleCategoryFilter}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm categories = {CATEGORIES} />
      <TaskList tasks={tasks} deleteAction={onDeleteAction} />
    </div>
  );
}

export default App;
