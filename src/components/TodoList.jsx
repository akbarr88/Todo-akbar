import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';



const TodoList = ({ filter, updateEdit }) => {
  const todos = useSelector((state) => {
    if (filter === 'active') {
      return state.todos.filter((todo) => !todo.completed);
    }
    if (filter === 'completed') {
      return state.todos.filter((todo) => todo.completed);
      setbtnActive (false)
      setbtnAll (true)
      setbtnComplete (true)
    }
    return state.todos;
  });
 
  const sendtofirstparent =(data) => {
    updateEdit(data)
  }


  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} className='result-todo' updateEdit = {sendtofirstparent} /> 
      ))}
    </div>
  );
};

export default TodoList;
