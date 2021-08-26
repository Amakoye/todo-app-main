import React, { useContext } from "react";
import icon_check from "../images/icon-check.svg";
import { TodosContext } from "../App";

const TodoItem = ({ todo }) => {
  const { id, title, isComplete } = todo;
  const { deleteTodo } = useContext(TodosContext);
  return (
    <div className="card-content">
      {isComplete ? (
        <div className="todo-item container">
          <div className="row">
            <div className="col-1 mt-1 ml-2">
              <div className="todo-icon-check">
                <img className="icon-check" src={icon_check} alt="" />
              </div>
            </div>
            <div className="col-9 todo-content">
              <p>{title}</p>
            </div>
            <div className=" col-1 todo-delete mt-1">
              <i
                className="fas fa-trash-alt text-danger"
                onClick={() => deleteTodo(id)}
              ></i>
            </div>
          </div>
        </div>
      ) : (
        <div className="todo-item container">
          <div className="row">
            <div className="col-1 ml-2">
              <div className="todo-icon-unchecked ">
                <i className="far fa-circle fa-1x"></i>
              </div>
            </div>

            <div className="col-9 todo-content">
              <p>{title}</p>
            </div>
            <div className=" col-1 todo-delete mt-1">
              <i
                className="fas fa-trash-alt text-danger"
                onClick={() => deleteTodo(id)}
              ></i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
