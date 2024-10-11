import React, { useState } from "react";

function TodoList({ activeTab }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", active: true },
    { id: 2, text: "Task 2", active: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, text: newTask, active: true },
      ]);
      setNewTask("");
    }
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, active: !task.active } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDeleteCompleted = () => {
    setTasks(tasks.filter((task) => task.active));
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return task.active;
    if (activeTab === "Completed") return !task.active;
    return false;
  });

  return (
    <div className="todo-list">
      {activeTab !== "Completed" && (
        <div className="add-task">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="add details"
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
      )}

      <ul className="task-list">
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={!task.active}
              onChange={() => handleToggleTask(task.id)}
            />
            <span className={task.active ? "" : "completed"}>{task.text}</span>
            {!task.active && (
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>

      {activeTab === "Completed" && tasks.some((task) => !task.active) && (
        <button className="delete-all" onClick={handleDeleteCompleted}>
          Delete All
        </button>
      )}
    </div>
  );
}

export default TodoList;
