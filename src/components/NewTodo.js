import React from "react";

const NewTodo = () => {
  return (
    <div className="col-md-6 mx-auto">
      <form className="form new-todo ">
        <input
          type="text"
          className="form-control"
          name="new-todo"
          id="new-todo"
          placeholder="Create a new todo..."
        />
      </form>
    </div>
  );
};

export default NewTodo;
