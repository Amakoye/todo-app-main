import {
  GET_ALL,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  GET_ACTIVE,
  GET_COMPLETE,
  CLEAR_COMPLETE,
} from "../Types";
export const todosReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      //save data to localstorage
      localStorage.setItem(
        "todos",
        JSON.stringify([...state.todos, action.payload])
      );
      return {
        ...state,
        todos: JSON.parse(localStorage.getItem("todos")),
      };

    case GET_ALL:
      //check if todos key exists in localStorage
      if (localStorage.getItem("todos") !== null) {
        return {
          ...state,
          todos: JSON.parse(localStorage.getItem("todos")),
        };
      } else {
        return state;
      }

    case DELETE_TODO:
      let currentTodos = JSON.parse(localStorage.getItem("todos")).filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(currentTodos));
      return {
        ...state,
        todos: JSON.parse(localStorage.getItem("todos")),
      };

    case TOGGLE_TODO:
      //find todo to be toggled
      const todoToToggle = JSON.parse(localStorage.getItem("todos")).find(
        (todo) => todo.id === action.payload
      );
      // destructure it's properties
      const { id, title, isComplete } = todoToToggle;
      //create an new object
      const toggledTodo = { id, title, isComplete: !isComplete };
      // will hold all todos except, one to be toggled
      const todosBeforeToggle = JSON.parse(
        localStorage.getItem("todos")
      ).filter((todo) => todo.id !== action.payload);

      if (todosBeforeToggle.length > 0) {
        const todosAfterToggle = [...todosBeforeToggle, toggledTodo];

        console.log(todosAfterToggle);

        localStorage.setItem("todos", JSON.stringify(todosAfterToggle));
      } else {
        const todosAfterToggle = [toggledTodo];

        localStorage.setItem("todos", JSON.stringify(todosAfterToggle));
      }
      return {
        ...state,
        todos: JSON.parse(localStorage.getItem("todos")),
      };

    case GET_ACTIVE:
      const activeTodos = JSON.parse(localStorage.getItem("todos")).filter(
        (todo) => todo.isComplete !== true
      );
      if (activeTodos) {
        return {
          ...state,
          todos: activeTodos,
        };
      } else {
        return state;
      }

    case GET_COMPLETE:
      const completeTodos = JSON.parse(localStorage.getItem("todos")).filter(
        (todo) => todo.isComplete === true
      );
      if (completeTodos) {
        return {
          ...state,
          todos: completeTodos,
        };
      } else {
        return state;
      }

    case CLEAR_COMPLETE:
      let incompleteTodos = JSON.parse(localStorage.getItem("todos")).filter(
        (todo) => todo.isComplete === false
      );
      if (incompleteTodos) {
        localStorage.setItem("todos", JSON.stringify(incompleteTodos));
      }

      if (localStorage.getItem("todos") !== null) {
        return {
          ...state,
          todos: JSON.parse(localStorage.getItem("todos")),
        };
      } else {
        return state;
      }

    default:
      return state;
  }
};
