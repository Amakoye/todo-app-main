import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { stateData } from "./data";

const App = () => {
  const [todos, setTodos] = useState(stateData);
  return (
    <div className="App container">
      <Header />
      <NewTodo />
      <Todos todos={todos} />
    </div>
  );
};

export default App;
