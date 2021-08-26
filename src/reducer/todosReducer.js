import { GET_ALL, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../Types";
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

      if (todosBeforeToggle.length) {
        const todosAfterToggle = [todosBeforeToggle, toggledTodo];

        localStorage.setItem("todos", JSON.stringify(todosAfterToggle));
      } else {
        const todosAfterToggle = [toggledTodo];

        localStorage.setItem("todos", JSON.stringify(todosAfterToggle));
      }

      return {
        ...state,
        todos: JSON.parse(localStorage.getItem("todos")),
      };

    default:
      return state;
  }
};
