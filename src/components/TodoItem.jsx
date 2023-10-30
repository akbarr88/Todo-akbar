import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../actions/todoActions';


const TodoItem = ({ todo, updateEdit }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const updateEdititem = (status) => {
    updateEdit(status)
  }

  return (
    <div className='result'> 
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleComplete}
        className='checkbox'
      />
      <p className='todo-text'>{todo.text}</p>
      <button onClick={handleDelete} className='btn-delete'>❌</button>
      <button onClick={() => updateEdititem ({statusClick:true,id:todo.id})} className='btn-edit'>✏️</button>
    </div>
  );
};

export default TodoItem;
