import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos }) => {
  return (todos !== null && todos.length) > 0 ? (
    <div className="card todos col-md-5 mx-auto">
      {todos.map((todoItem) => {
        return <TodoItem key={todoItem.title} todo={todoItem} />;
      })}
    </div>
  ) : (
    <div className="card text-danger mt-5 p-3">
      <p className="mx-auto my-auto">You have Zero todos pending</p>
    </div>
  );
};

export default Todos;
