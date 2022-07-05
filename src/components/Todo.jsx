import React, { useState } from "react";

function Todo({ name, id, deleteTodo, editTodo }) {
  return (
    <div className="todo__elem">
      <p>{name}</p>

      <button onClick={() => deleteTodo(id)}>Delete</button>
      <button onClick={() => editTodo(id)}>Edit</button>
    </div>
  );
}

export default Todo;
