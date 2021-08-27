import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { todosReducer } from "./reducer/todosReducer";
import {
  ADD_TODO,
  GET_ALL,
  DELETE_TODO,
  TOGGLE_TODO,
  GET_ACTIVE,
  GET_COMPLETE,
  CLEAR_COMPLETE,
  TOGGLE_LIGHT,
} from "./Types";

export const TodosContext = React.createContext();

const App = () => {
  const defaultState = {
    todos: [],
    toggleLight: null,
  };

  const [state, dispatch] = useReducer(todosReducer, defaultState);
  const [todoTitle, setTodoTitle] = useState("");
  const isLight = state.toggleLight;

  const getAll = () => {
    dispatch({ type: GET_ALL });
    //console.log("get all");
  };

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

  // const get active todos
  const getActive = () => {
    dispatch({ type: GET_ACTIVE });
  };

  // const get active todos
  const getComplete = () => {
    dispatch({ type: GET_COMPLETE });
  };

  // clear complete todos
  const clearComplete = () => {
    dispatch({ type: CLEAR_COMPLETE });
  };

  // toggle background
  const toggleLight = () => {
    dispatch({ type: TOGGLE_LIGHT });
  };
  const setBackground = () => {
    const body = document.querySelector("body");
    const formInput = document.querySelector("input");
    const todosCard = document.querySelector(".card");
    const textColor = document.querySelectorAll("p");

    if (state.toggleLight) {
      body.style.backgroundColor = "hsl(237, 14%, 26%)";
      body.style.color = "hsl(233, 11%, 84%)";
      formInput.style.background = "hsl(233, 14%, 35%)";
      formInput.classList.add("input-focus");
      todosCard.style.backgroundColor = "hsl(233, 14%, 35%)";
      //loop through to style all p elements
      for (let i = 0; i < textColor.length; i++) {
        textColor[i].style.color = "hsl(233, 11%, 84%)";
      }
    } else {
      body.style.backgroundColor = "hsl(0, 0%, 98%)";
      body.style.color = "#000";
      formInput.style.backgroundColor = "hsl(0, 0%, 98%)";
      formInput.classList.remove("input-focus");
      todosCard.style.backgroundColor = "hsl(0, 0%, 98%)";
      //loop through to style all p elements
      for (let i = 0; i < textColor.length; i++) {
        textColor[i].style.color = "#000";
      }
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    setBackground();
  });

  return (
    <TodosContext.Provider
      value={{
        getAll,
        handleSubmit,
        setTodoTitle,
        deleteTodo,
        toggleTodo,
        getActive,
        getComplete,
        clearComplete,
        toggleLight,
        isLight,
      }}
    >
      <div className="App container">
        <Header />
        <NewTodo todoTitle={todoTitle} />
        <Todos todos={state.todos} />
      </div>
      <footer className="footer">
        <div className="container">
          <span>react TodoApp, by @AmakoyeCharles 2021</span>
        </div>
      </footer>
    </TodosContext.Provider>
  );
};

export default App;
