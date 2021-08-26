import { GET_ALL, ADD_TODO, DELETE_TODO } from "../Types";
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
      let allTodos = JSON.parse(localStorage.getItem("todos"));
      let currentTodos = allTodos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(currentTodos));
      return {
        ...state,
        todos: JSON.parse(localStorage.getItem("todos")),
      };

    default:
      console.log("default state");
  }
};
