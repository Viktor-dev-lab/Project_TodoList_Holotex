import { createContext, useState } from "react";

/* eslint-disable-next-line react-refresh/only-export-components */
export const Appcontext = createContext();

const AppProvider = ({ children }) => {
  const [selectIDCategory, setSelectIDCategory] = useState("work");
  const [selectFilter, setSelectFilter] = useState("all");
  const [newItemId, setNewItemId] = useState(null);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [activeTodoID, setActiveTodoID] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [todoItem, setTodoItem] = useState([
    {
      id: 1,
      name: "Studying",
      isImportant: false,
      isCompleted: false,
      isDeleted: false,
      category: "study",
    },
    {
      id: 2,
      name: "Go to gym",
      isImportant: true,
      isCompleted: true,
      isDeleted: false,
      category: "work",
    },
    {
      id: 3,
      name: "Read the book",
      isImportant: true,
      isCompleted: false,
      isDeleted: false,
      category: "personal",
    },
  ]);
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

  const handleChangeFieldTodo = (updatedTodo) => {
    const newTodoItem = todoItem.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      }
      return todo;
    });
    setTodoItem(newTodoItem);
  };

  return (
    <Appcontext.Provider
      value={{
        selectIDCategory,
        setSelectIDCategory,
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
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export default AppProvider;
