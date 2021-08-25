import React, { useContext } from "react";
import { TodosContext } from "../App";

const TodoFilters = () => {
  const { getAll } = useContext(TodosContext);
  return (
    <div className="card-filters row  a">
      <div className="col-md-3 text-center mt-2 ">
        <p className="btn btn-sm">
          {
            //`${activeTodos.length} Items left`
            3
          }
        </p>
      </div>
      <div className="col-md-5 text-center mt-2">
        <p className="btn btn-sm" onClick={() => getAll()}>
          All
        </p>
        <p className="btn btn-sm">Active</p>
        <p className="btn btn-sm">Completed</p>
      </div>
      <div className="col-md-4 text-center mt-2">
        <p className="btn btn-sm">Clear Completed</p>
      </div>
    </div>
  );
};

export default TodoFilters;
