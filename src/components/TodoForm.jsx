import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import "./todoList.css";
import FlipMove from "react-flip-move";
import Todo from "./Todo";

// get all items from local storage
const getLocalItems = () => {
  const todos = localStorage.getItem("todos");
  console.log("local storage todos", todos);

  if (todos) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

function TodoForm() {
  const [inputData, setInputData] = useState("");
  const [showTodo, setShowTodo] = useState(getLocalItems());
  const [toggleSubmit, setToggleSubmit] = useState(false);
  const [isEditItem, setIsEditItem] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!inputData) return alert("Please write something");
    else if (inputData && toggleSubmit) {
      setShowTodo(
        showTodo.map((item) => {
          if (item.id === isEditItem) {
            return { ...item, name: inputData };
          }
          return item;
        })
      );

      setInputData("");
      setToggleSubmit(false);
      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setShowTodo([...showTodo, allInputData]);
      setInputData("");
    }
  };

  // function to delete todo
  const deleteTodo = (index) => {
    const updatedItems = showTodo.filter((item) => index !== item.id);
    console.log("these are updated items", updatedItems);

    setShowTodo(updatedItems);
  };

  // function to clear all todos
  const removeAllTodos = () => {
    setShowTodo([]);
  };

  // function to update todo
  const editTodo = (id) => {
    let newEditItem = showTodo.find((item) => {
      return item.id === id;
    });

    setToggleSubmit(true);

    setInputData(newEditItem.name + " ");

    setIsEditItem(id);
  };

  // add todos to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(showTodo));
  }, [showTodo]);

  return (
    <>
      <h2 className="header">Task Manager</h2>
      <div className="form">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Add Todo..."
            onChange={(e) => setInputData(e.target.value)}
            value={inputData}
          />
          {toggleSubmit ? <button>Update</button> : <button>Add Todo</button>}
        </form>

        {/* returning filtered items */}
        <div className="todo__list">
          {showTodo.map((todo) => (
            
             <Todo name={todo.name} id={todo.id} key={todo.id} deleteTodo={deleteTodo} editTodo={editTodo} />
            
          ))}
        </div>

        {showTodo.length > 1 ? (
          <button onClick={removeAllTodos} className="remove-button">
            Remove All
          </button>
        ) : null}
      </div>
    </>
  );
}

export default TodoForm;
