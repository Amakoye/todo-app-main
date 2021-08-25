import { GET_ALL, ADD_TODO } from "../Types";
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

    default:
      console.log("default state");
  }
};
