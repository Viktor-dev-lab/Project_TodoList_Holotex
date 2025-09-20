import React, { useState } from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "./Sidebar.css";
import { CATEGORY_ITEMS } from "../constants";

const Sidebar = (props) => {
  const data = props.todoItem;
  const [name, setname] = useState(data.name);
  const [isCompleted, setisCompleted] = useState(data.isCompleted);
  const [isImportant, setisImportant] = useState(data.isImportant);
  const [category, setCategory] = useState(data.category);

  const handleSaveToDo = () => {
    const newTodo = { ...data, name, isCompleted, isImportant, category };
    props.handleChangeFieldTodo(newTodo);
    props.handleCloseSidebar();
  };

  return (
    <motion.div
      className="sb-Sidebar"
      initial={{ x: "100%" }} // bắt đầu ngoài màn hình
      animate={{ x: 0 }} // trượt vào
      exit={{ x: "100%" }} // trượt ra
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <form className="sb-form">
        <div>
          <label htmlFor="sb-name">Todo name</label>
          <input
            id="sb-name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>

        <div className="sb-field">
          <label htmlFor="sb-important">Is important?</label>
          <input
            id="sb-important"
            name="important"
            type="checkbox"
            checked={isImportant}
            onChange={() => {
              setisImportant(!isImportant);
            }}
          />
        </div>

        <div className="sb-field">
          <label htmlFor="sb-completed">Is completed?</label>
          <input
            id="sb-completed"
            name="completed"
            type="checkbox"
            checked={isCompleted}
            onChange={() => {
              setisCompleted(!isCompleted);
            }}
          />
        </div>

        <div className="sb-dropdown">
          <label htmlFor="sb-category">Category</label>
          <select
            id="sb-category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORY_ITEMS.map((item) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
      </form>

      <div className="sb-action">
        <button className="sb-button" onClick={handleSaveToDo}>
          Save
        </button>
        <button className="sb-button" onClick={props.handleCloseSidebar}>
          Cancel
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
