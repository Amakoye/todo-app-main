import React from "react";

const TodoFilters = () => {
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
        <p className="btn btn-sm">All</p>
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
