// import React, { useState } from "react";
// import Todo from "./Todo";
// import "./todoList.css";

// function TodoList({ showTodo }) {
//   let todos = showTodo;
//   const [updatedTodos, setUpdatedTodos] = useState(todos);
//   console.log("this is updated todos", updatedTodos);

//   const deleteTodo = (id) => {
//     const updatedItems = showTodo.filter((item, ind) => id !== ind);
//     console.log("these are updated items", updatedItems);

//     setUpdatedTodos(updatedItems);
//   };

//   return (
//     <div className="todo__list">
//       {showTodo.map((todo, ind) => (
//         <>
//           <h3 key={ind}>{todo}</h3>
//           <button onClick={() => deleteTodo(ind)}>Click me</button>
//         </>
//       ))}
//     </div>
//   );
// }

// export default TodoList;
