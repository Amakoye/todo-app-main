import React, { useContext } from "react";
import { TodosContext } from "../App";
import TodoFilters from "./TodoFilters";
import TodoItem from "./TodoItem";

const Todos = ({ todos }) => {
  const { getAll } = useContext(TodosContext);
  return (todos !== null && todos.length) > 0 ? (
    <div className="card todos col-md-6 mx-auto">
      {todos.map((todo, index) => {
        return <TodoItem todo={todo} key={index} />;
      })}
      <TodoFilters />
    </div>
  ) : (
    <div className="card text-danger col-md-6 mx-auto mt-5 p-3">
      <p className="mx-auto my-auto">You have Zero todos pending</p>
      <p className="btn btn-info btn-sm col-md-2" onClick={() => getAll()}>
        back
      </p>
    </div>
  );
};

export default Todos;
