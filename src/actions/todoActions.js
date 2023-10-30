export const addTodo = (text) => {
    return {
      type: 'ADD_TODO',
      payload: {
        id: Date.now(),
        text,
        completed: false,
      },
    };
  };
  
  export const completeTodo = (id) => {
    return {
      type: 'COMPLETE_TODO',
      payload: id,
    };
  };
  
  export const deleteTodo = (id) => {
    return {
      type: 'DELETE_TODO',
      payload: id,
    };
  };

  export const editTodo = (edit) => {
    return {
      type: 'EDIT_TODO',
      payload: edit,
    };
  };

  
  