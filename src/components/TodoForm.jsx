import React, { useState } from "react";
import TodoList from "./TodoList";
import "./todoList.css";

function TodoForm() {
  const [inputData, setInputData] = useState("");
  const [showTodo, setShowTodo] = useState([]);
  const [showButton, setShowButton] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setInputData("");
    console.log(showTodo);
  };

  const addTodo = (e) => {
    if (inputData === "") return null;
    else setShowTodo([...showTodo, inputData]);
  };

  // function to delete todo
  const deleteTodo = (id) => {
    const updatedItems = showTodo.filter((item, ind) => id !== ind);
    console.log("these are updated items", updatedItems);

    setShowTodo(updatedItems);
  };

  // function to clear all todos
  const removeAllTodos = () => {
    setShowTodo([]);
  };

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
        />
        <button
          type="submit"
          onClick={addTodo}
         
        >
          Add Todo
        </button>
      </form>

      {/* returning filtered items */}
      <div className="todo__list">
        {showTodo.map((todo, ind) => (
          <>
            <p key={ind}>{todo}</p>
            <button onClick={() => deleteTodo(ind)}>Click me</button>
          </>
        ))}
      </div>
      {showTodo.length > 1 ? (
        <button onClick={removeAllTodos}>Remove All</button>
      ) : null}
    </div>
  );
}

export default TodoForm;
