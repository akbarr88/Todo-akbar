const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        console.log (action.payload)
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };

      case 'COMPLETE_TODO':
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id === action.payload) {
              return { ...todo, completed: !todo.completed };
            }
            return todo;
          }),
        };

      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };

      case 'EDIT_TODO':
       return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, text : action.payload.text };
          }
          return todo;
        }),
      };

      default:
        return state;
    }
  };
  
  export default todoReducer;
  