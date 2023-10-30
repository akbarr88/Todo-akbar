// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTodo } from './actions/todoActions';
// import TodoList from './components/TodoList';
// import './styles.css';

// const App = () => {
//   const [text, setText] = useState('');
//   const [filter, setFilter] = useState('all');
//   const dispatch = useDispatch();

//   const handleAddTodo = () => {
//     if (text) {
//       dispatch(addTodo(text));
//       setText('');
//     }
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>Add</button>
//       <div>
//         <button onClick={() => setFilter('all')}>All</button>
//         <button onClick={() => setFilter('active')}>Active</button>
//         <button onClick={() => setFilter('completed')}>Completed</button>
//       </div>
//       <TodoList filter={filter} />
//     </div>
//   );
// };

// export default App;
