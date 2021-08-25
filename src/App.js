import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { todosReducer } from "./reducer/todosReducer";
import { ADD_TODO, GET_ALL } from "./Types";

export const TodosContext = React.createContext();

const App = () => {
  const defaultState = {
    todos: [],
    toggleLight: false,
  };

  const [state, dispatch] = useReducer(todosReducer, defaultState);
  const [todoTitle, setTodoTitle] = useState("");

  const getAll = () => {
    dispatch({ type: GET_ALL });
    //console.log("get all");
  };

  useEffect(() => {
    getAll();
  }, []);

  // create new todo item
  const addTodo = () => {
    if (todoTitle) {
      let todoItem = {
        id: new Date().getTime().toString(),
        title: todoTitle,
        isComplete: false,
      };
      //console.log(todoItem);
      dispatch({ type: ADD_TODO, payload: todoItem });
      setTodoTitle("");
    } else {
      alert("Please fill all fields");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo();
  };

  return (
    <TodosContext.Provider value={{ getAll, handleSubmit, setTodoTitle }}>
      <div className="App container">
        <Header />
        <NewTodo todoTitle={todoTitle} />
        <Todos todos={state.todos} />
      </div>
    </TodosContext.Provider>
  );
};

export default App;
