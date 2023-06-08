import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const[text, setNewText] = useState("")
  const [category, setSelecterCategory] = useState("")
  const handleTextChange = (e) => setNewText(e.target.value)
  const handleCategoryChange = (e) => setSelecterCategory(e.target.value)
  const handleSubmit = (e) => {
  e.preventDefault();
  const task = {text, category}
  onTaskFormSubmit(task)
    }
  return(
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTextChange}/>
        
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          
          {categories.map((category) =>(category !== "All" ? 
          <option key={category}>{category}</option> : null))}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
