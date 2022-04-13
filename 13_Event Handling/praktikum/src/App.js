import React from 'react';
import './styling/App.css'
import AddTodo from './components/AddTodo';


function App() {
  return (
    <section className='container'>
    <div className='todosTitle'>
        <h1>todos</h1>
    </div>
      <div className='addTodo'>
        <AddTodo />
      </div>
       {/* <div className='todoListItem'>
        <TodoListItem />
      </div>  */}
    </section>
  );
}

export default App;
