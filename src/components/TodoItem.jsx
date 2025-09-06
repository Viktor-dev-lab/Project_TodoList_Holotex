import React from "react";

const TodoItem = (props) => {
  return (
    <div className="todo-item">
      <p className="todo-text">{props.name}</p>
    </div>
  );
};

export default TodoItem;
