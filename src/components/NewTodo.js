import React, { useContext } from "react";
import { TodosContext } from "../App";

const NewTodo = ({ todoTitle }) => {
  const { handleSubmit, setTodoTitle } = useContext(TodosContext);
  return (
    <div className="col-md-6 mx-auto">
      <form className="form new-todo " onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="new-todo"
          id="new-todo"
          placeholder="Create a new todo..."
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default NewTodo;
