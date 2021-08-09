import React, { useState, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { stateData } from "./data";
import { todosReducer } from "./reducer/todosReducer";

const TodosContext = React.createContext();

const App = () => {
  const defaultState = {
    todos: [],
    toggleLight: false,
  };
  const [state, dispatch] = useReducer(todosReducer, defaultState);
  const [todos, setTodos] = useState(stateData);
  return (
    <TodosContext.Provider>
      <div className="App container">
        <Header />
        <NewTodo />
        <Todos todos={todos} />
      </div>
    </TodosContext.Provider>
  );
};

export default App;
