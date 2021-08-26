import React, { useContext } from "react";
import { TodosContext } from "../App";

const TodoFilters = () => {
  const { getAll, getActive, getComplete, clearComplete } =
    useContext(TodosContext);

  //get active todos from localstorage
  const activeTodos = JSON.parse(localStorage.getItem("todos")).filter(
    (todo) => todo.isComplete !== true
  );

  return (
    <div className="card-filters row  a">
      <div className="col-md-3 text-center mt-2 ">
        <p className="btn btn-sm">{activeTodos.length}</p>
      </div>
      <div className="col-md-5 text-center mt-2">
        <p className="btn btn-sm" onClick={() => getAll()}>
          All
        </p>
        <p className="btn btn-sm" onClick={() => getActive()}>
          Active
        </p>
        <p className="btn btn-sm" onClick={() => getComplete()}>
          Completed
        </p>
      </div>
      <div className="col-md-4 text-center mt-2">
        <p className="btn btn-sm" onClick={() => clearComplete()}>
          Clear Completed
        </p>
      </div>
    </div>
  );
};

export default TodoFilters;
