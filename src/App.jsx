import "./App.css";
import TodoItem from "./components/TodoItem";
import Sidebar from "./components/Sidebar";
import FilterPannel from "./components/FilterPannel";
import { useMemo } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { Appcontext } from "./context/AppProvider";

function App() {
  const {
    todoItem,
    setTodoItem,
    selectFilter,
    setSelectFilter,
    newItemId,
    setNewItemId,
    openSidebar,
    setOpenSidebar,
    activeTodoID,
    setActiveTodoID,
    searchText,
    setSearchText,
    handleCompleteCheckboxChange,
    handleOpenSidebar,
    getTodo,
    handleChangeFieldTodo,
  } = useContext(Appcontext);

  const FiltertodoList = useMemo(() => {
    return todoItem.filter((todo) => {
      if (!todo.name.toLowerCase().includes(searchText.toLowerCase())) {
        return false;
      }

      switch (selectFilter) {
        case "all":
          return true;
        case "completed":
          return todo.isCompleted;
        case "important":
          return todo.isImportant;
        case "deleted":
          return todo.isDeleted;
        default:
          return true;
      }
    });
  }, [todoItem, selectFilter, searchText]);

  return (
    <div className="container">
      <FilterPannel
        selectFilter={selectFilter}
        setSelectFilter={setSelectFilter}
        todolist={todoItem}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <div className="main-container">
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
                    isDeleted: false,
                    category: "study",
                  },
                ]);
                setNewItemId(newId);
                e.target.value = "";
              }
            }
          }}
        />
        <div className="todo-list">
          {FiltertodoList.map((todo, index) => {
            const isNewItem = todo.id === newItemId;
            return (
              <motion.div
                key={todo.id}
                initial={isNewItem ? { opacity: 0, x: -10 } : false}
                animate={
                  isNewItem ? { opacity: 1, x: [0, -5, 5, -5, 5, 0] } : false
                }
                transition={isNewItem ? { duration: 0.5 } : {}}
                onAnimationComplete={() => {
                  if (isNewItem) setNewItemId(null);
                }}
              >
                <TodoItem
                  id={todo.id}
                  name={`${index + 1}. ${todo.name}`}
                  isImportant={todo.isImportant}
                  isCompleted={todo.isCompleted}
                  handleCompleteCheckboxChange={handleCompleteCheckboxChange}
                  handleOpenSidebar={handleOpenSidebar}
                />
              </motion.div>
            );
          })}
        </div>
        <AnimatePresence>
          {openSidebar && (
            <Sidebar
              key={activeTodoID}
              todoItem={getTodo}
              handleCloseSidebar={() => setOpenSidebar(false)}
              handleChangeFieldTodo={handleChangeFieldTodo}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
