import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  const todoItem = [
    {id: 1, name:"Studying"},
    {id: 2, name:"Go to gym"},
    {id: 3, name:"Read the book"},
  ];

  const todoList = todoItem.map((value, index) => {
    return <TodoItem key={value.id} name={`${index + 1}. ${value.name}`} />
  });

  return (
    <div className="container">
      <h1 className="title">My Todo List</h1>
      <input
        className="task-input"
        type="text"
        name="add-new-task"
        placeholder="Add new task"
      />
      <div className="todo-list">
        {todoList}
      </div>
    </div>
  );
}

export default App;
