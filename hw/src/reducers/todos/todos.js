const initialState = {
  todos: [],
};

const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_TODOS":
      return { todos: payload };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((element) => {
          return element.id !== payload.id;
        }),
      };
    default:
      return state;
  }
};

export default todos;

export const addTodos = (todos) => {
  return {
    type: "ADD_TODOS",
    payload: todos,
  };
};

export const removeTodo = (todo) => {
  return {
    type: "REMOVE_TODO",
    payload: todo,
  };
};
