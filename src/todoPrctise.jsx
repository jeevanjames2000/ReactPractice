import React, { useState } from "react";

function TodoPrctise() {
  const [tasks, setTasks] = useState([]);
  console.log("tasks: ", tasks);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <>
      <input type="text" value={input} onChange={(e) => handleChange(e)} />
      <button onClick={handleAdd}>Add</button>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <h2>{task.text}</h2>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                Completed
              </span>
              <button
                onClick={() => {
                  handleDelete(task.id);
                }}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoPrctise;
