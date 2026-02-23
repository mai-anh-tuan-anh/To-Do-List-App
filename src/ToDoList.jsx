import React, { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function handleAddTask() {
    setTasks([...tasks, newTask]);
    setNewTask("");
  }
  function handleDeleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index - 1]] = [
        newTasks[index - 1],
        newTasks[index],
      ];
      setTasks(newTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const newTasks = [...tasks];
      [newTasks[index], newTasks[index + 1]] = [
        newTasks[index + 1],
        newTasks[index],
      ];
      setTasks(newTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask} className="add-button">
          Add
        </button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                onClick={() => handleDeleteTask(index)}
                className="delete-button"
              >
                Delete
              </button>
              <button onClick={() => moveTaskUp(index)} className="move-button">
                ☝️
              </button>
              <button
                onClick={() => moveTaskDown(index)}
                className="move-button"
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoList;
