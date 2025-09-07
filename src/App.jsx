import "./App.css";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [todoItem, setTodoItem] = useState([
    { id: 1, name: "Studying", isImportant: false, isCompleted: false },
    { id: 2, name: "Go to gym", isImportant: true, isCompleted: true },
    { id: 3, name: "Read the book", isImportant: true, isCompleted: false },
  ]);
  const [newItemId, setNewItemId] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [activeTodoID, setActiveTodoID] = useState(null);

  const handleCompleteCheckboxChange = (todoID) => {
    const newtodoItem = todoItem.map((todo) => {
      if (todo.id == todoID) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoItem(newtodoItem);
  };

  const getTodo = todoItem.find((todo) => todo.id == activeTodoID);

  const handleOpenSidebar = (todoID) => {
    setOpenSidebar(true);
    setActiveTodoID(todoID);
  };

  const handelChangeFieldTodo = (updatedTodo) => {
  const newTodoItem = todoItem.map(todo => {
    if (todo.id === updatedTodo.id) {
      return updatedTodo; 
    }
    return todo; 
  });
  setTodoItem(newTodoItem);
};


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
        <TodoItem
          id={value.id}
          name={`${index + 1}. ${value.name}`}
          isImportant={value.isImportant}
          isCompleted={value.isCompleted}
          handleCompleteCheckboxChange={handleCompleteCheckboxChange}
          handleOpenSidebar={handleOpenSidebar}
        />
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
                {
                  id: newId,
                  name: value,
                  isImportant: false,
                  isCompleted: false,
                },
              ]);
              setNewItemId(newId);
              e.target.value = "";
            }
          }
        }}
      />
      <div className="todo-list">{todoList}</div>
      <AnimatePresence>
        {openSidebar && (
          <Sidebar
            key={activeTodoID}
            todoItem={getTodo}
            hadnleCloseSidebar={() => setOpenSidebar(false)}
            handelChangeFieldTodo={handelChangeFieldTodo}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
