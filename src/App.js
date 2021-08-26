import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { todosReducer } from "./reducer/todosReducer";
import { ADD_TODO, GET_ALL, DELETE_TODO, TOGGLE_TODO } from "./Types";

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

  // delete todo
  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  // toggle todo
  const toggleTodo = (id) => {
    dispatch({ type: TOGGLE_TODO, payload: id });
  };

  return (
    <TodosContext.Provider
      value={{ getAll, handleSubmit, setTodoTitle, deleteTodo, toggleTodo }}
    >
      <div className="App container">
        <Header />
        <NewTodo todoTitle={todoTitle} />
        <Todos todos={state.todos} />
      </div>
    </TodosContext.Provider>
  );
};

export default App;
