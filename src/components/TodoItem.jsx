import React from "react";

const TodoItem = (props) => {
  return (
    <div className="todo-item" onClick={() => {props.handleOpenSidebar(props.id)}}>
      <div style={{display: 'flex', gap: 4}}>
        <input 
          type="checkbox" 
          checked={props.isCompleted} 
          onChange={() => {
            props.handleCompleteCheckboxChange(props.id)
          }} 
          onClick={(e) => {e.stopPropagation()}}
          style={{ marginRight: '3px' }} 
        />
        <p className="todo-text">{props.name}</p>
      </div>

      {props.isImportant && <p className="important-text">Important</p>}
    </div>
  );
};

export default TodoItem;
