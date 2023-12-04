import logo from './logo.svg';
import './App.css';
import Count from './Component/Count';
import UseEffectFunction from './Component/UseEffectfunction';
import ExpensComp from './Component/UseMemofunction';
import ParentComp from './Component/UseCallbackFunction';
import MasterPage from './Component/MasterPage';
import PractiseEffect from './Component/PractiseEffect'
import FactorialCalculator from './Component/MemoCallback'
import PractiseState from './Component/PractiseState';
import PractiseRef from './Component/PractiseRef';
import Apps from './Component/CardApp';
import useRefFunction from './Component/useRefFunction';
import PracticeAll from './Component/PracticeAll';
import StateFullLess from './Component/StateFullLess';
import Fragments from './Component/Fragments';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Component/AboutPage';
import NavigateMethod from './Component/NavigateMethod';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import RandomImage from './Component/RandomImage';


// const HomePage= ()=>{
//   return(
// <div>
// <h6>hello its a home page</h6>
// </div>
//   );
// }
function App() {
  // const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
<RandomImage/>

      {/* <nav>
    <Link to = "/"> Home </Link> |  {
      
    }  <Link to = "/about/1"> About user 1 </Link>
      </nav>
  

  <button onClick={()=>setLoggedIn(!loggedIn)}> {loggedIn? 'Log out' : 'Log In'}</button>
<Router>
<Routes>
<Route exact path="/" element={<NavigateMethod/>}/>
  <Route  path="/about/:userId" element={<AboutPage/>}/>
  <Route  path="/about1/:userId" element={loggedIn ? <AboutPage/> : <NavigateMethod to ="/"/>}/>
</Routes>

</Router> */}



{/* <StateFullLess name="Tanya"/>
<Fragments/> */}
    {/* <useRefFunction/> */}
        {/* <Apps/> */}
        {/* <PractiseEffect/>
        <PractiseState/>
         <PractiseRef/>
        <FactorialCalculator/>
         */}
        {/* <HomePage/>
   <Count/>
   <UseEffectFunction/> */}
   {/* <ExpensComp/>
   <ParentComp/> */}
  {/* <PracticeAll/> */}
 
    </div>
  );
}

export default App;


// import React, { useState, useEffect } from 'react';
// import TodoList from './Component/TodoList';

// const App = () => { 
//   const [todos, setTodos] = useState(() => {
//     const storedTodos = localStorage.getItem('todos');
//     return storedTodos ? JSON.parse(storedTodos) : [];
//   });

//   const [newTodoText, setNewTodoText] = useState('');

//   const handleTodoClick = (id) => {
//     setTodos(todos => todos.filter(todo => todo.id !== id));
//   }

//   const handleNewTodoChange = (event) => {
//     setNewTodoText(event.target.value);
//   }

//   const handleNewTodoSubmit = (event) => {
//     event.preventDefault();
//     if (newTodoText.trim()) {
//       const newTodo = { id: Date.now(), text: newTodoText };
//       setTodos(todos => [...todos, newTodo]);
//       setNewTodoText('');
//     }
//   }

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <TodoList todos={todos} onTodoClick={handleTodoClick} />
//       <form onSubmit={handleNewTodoSubmit}>
//         <input type="text" value={newTodoText} onChange={handleNewTodoChange} />
//         <button type="submit">Add Todo</button>
//       </form>
//     </div>
//   );
// };

