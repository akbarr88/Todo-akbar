import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, editTodo } from './actions/todoActions';
import TodoList from './components/TodoList';
import './styles.css';

const App = () => {
  const [editText, seteditText] = useState ("")
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('all');
  const dispatch = useDispatch();
  const [btnAll, setbtnAll] = useState (true);
  const [btnActive, setbtnActive] = useState (false);
  const [btnComplete, setbtnComplete] = useState (false);

  const [edit, setEdit] = useState ({});

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleActive = () => {
    setbtnActive (true)
    setbtnAll (false)
    setbtnComplete (false)
    setFilter ("active")
  }

  
  const handlesetEdit = (updateEdit) => {
    console.log (updateEdit)
    setEdit(updateEdit)
  }

  const handleEditTodo = () => {
    dispatch(editTodo({
      id : edit.id,
      text : editText,
    }))
    setEdit({})
    seteditText('')
  }



  return (
    <div>
      <h1>My To do List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo} className='btn-add'>Add</button>
      
      
    {
      edit.statusClick && <div>
        <input
      type="text"
      value={editText}
      onChange={(e) => seteditText(e.target.value)}
    />
    <button onClick={handleEditTodo} className='btn-add'>Edit</button>
    <button onClick={() => setEdit (false)} className='btn-add'>❌</button> 
      </div> 
    }

      <div>
        <button className={filter === "all" ? "btn-active" : ""} onClick={() => setFilter('all')}>All</button>
        <button className={filter === "active" ? "btn-active" : ""} onClick={() => setFilter ('active')}>Active</button>
        <button className={filter === "completed" ? "btn-active" : ""} onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <TodoList filter={filter} updateEdit = {handlesetEdit}/>
    </div>
  );
};

export default App;
