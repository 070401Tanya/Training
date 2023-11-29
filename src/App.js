// import logo from './logo.svg';
// import './App.css';
// import Count from './Component/Count';
// import UseEffectFunction from './Component/UseEffectfunction';
// import ExpensComp from './Component/UseMemofunction';
// import ParentComp from './Component/UseCallbackFunction';
// import MasterPage from './Component/MasterPage';
// import PractiseEffect from './Component/PractiseEffect'
// import FactorialCalculator from './Component/MemoCallback'
// import PractiseState from './Component/PractiseState';
// import PractiseRef from './Component/PractiseRef';
// import Apps from './Component/CardApp';
// import useRefFunction from './Component/useRefFunction';


// const HomePage= ()=>{
//   return(
// <div>
// <h6>hello its a home page</h6>
// </div>
//   );
// }
// function App() {
//   return (
//     <div className="App">
//       <MasterPage>

//     <useRefFunction/>
//         {/* <Apps/> */}
//         {/* <PractiseEffect/>
//         <PractiseState/>
//          <PractiseRef/>
//         <FactorialCalculator/>
//          */}
//         {/* <HomePage/>
//    <Count/>
//    <UseEffectFunction/> */}
//    <ExpensComp/>
//    <ParentComp/>
//    </MasterPage>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import TodoList from './Component/TodoList';

const App = () => { 
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [newTodoText, setNewTodoText] = useState('');

  const handleTodoClick = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  const handleNewTodoChange = (event) => {
    setNewTodoText(event.target.value);
  }

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (newTodoText.trim()) {
      const newTodo = { id: Date.now(), text: newTodoText };
      setTodos(todos => [...todos, newTodo]);
      setNewTodoText('');
    }
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onTodoClick={handleTodoClick} />
      <form onSubmit={handleNewTodoSubmit}>
        <input type="text" value={newTodoText} onChange={handleNewTodoChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default App;