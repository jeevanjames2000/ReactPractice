import React, { useState, useRef } from "react";
import Draggable from "react-draggable";
import "./TodoStyles.css";

function StickyNotes() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const taskContainerRef = useRef(null);

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const containerRect = taskContainerRef.current.getBoundingClientRect();
      const randomX = Math.floor(Math.random() * (containerRect.width - 200));
      const randomY = Math.floor(Math.random() * (containerRect.height - 100));

      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
          position: { x: randomX, y: randomY },
        },
      ]);
      setInputValue("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDrag = (e, data, id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, position: { x: data.x, y: data.y } };
        }
        return task;
      })
    );
  };

  return (
    <div className="todo-app">
      <h1>Sticky Notes</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add Note</button>

      <div className="sticky-notes-container" ref={taskContainerRef}>
        {tasks.map((task) => (
          <Draggable
            key={task.id}
            position={{ x: task.position.x, y: task.position.y }}
            onStop={(e, data) => handleDrag(e, data, task.id)}
          >
            <div className="sticky-note">
              <div className="sticky-note-header">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                />
                <button onClick={() => deleteTask(task.id)}>&times;</button>
              </div>
              <div
                className="sticky-note-content"
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.text}
              </div>
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
}

export default StickyNotes;
