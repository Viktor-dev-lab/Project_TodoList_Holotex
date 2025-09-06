import "./App.css";
import TodoItem from "./components/TodoItem";
import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function App() {
  const [todoItem, setTodoItem] = useState([
    { id: 1, name: "Studying" },
    { id: 2, name: "Go to gym" },
    { id: 3, name: "Read the book" },
  ]);
  const [newItemId, setNewItemId] = useState(null);

  const todoList = todoItem.map((value, index) => {
    const isNewItem = value.id === newItemId;
    return (
      <motion.div
        key={value.id}
        initial={isNewItem ? { opacity: 0, x: -10 } : false}
        animate={isNewItem ? { opacity: 1, x: [0, -5, 5, -5, 5, 0] } : false}
        transition={isNewItem ? { duration: 0.5 } : {}}
        onAnimationComplete={() => {
          if (isNewItem) setNewItemId(null); 
        }}
      >
        <TodoItem name={`${index + 1}. ${value.name}`} />
      </motion.div>
    );
  });

  return (
    <div className="container">
      <h1 className="title">My Todo List</h1>
      <input
        className="task-input"
        type="text"
        name="add-new-task"
        placeholder="Add new task"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const value = e.target.value.trim();
            if (value) {
              const newId = crypto.randomUUID();
              setTodoItem([
                ...todoItem,
                { id: newId, name: value },
              ]);
              setNewItemId(newId);
              e.target.value = "";
            }
          }
        }}
      />
      <div className="todo-list">{todoList}</div>
    </div>
  );
}

export default App;