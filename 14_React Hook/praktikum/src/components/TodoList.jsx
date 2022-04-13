import React from 'react';
/* import AddTodo from './components/AddTodo';
import NavBar from './components/NavBar'; */
import AddTodo from './AddTodo';

const TodoList = () => {

  /* const isComplite = true */

  return (
    <React.Fragment>
      <div className='flex'>
    <section className='pt-40'>


        <h1 className='text-9xl font-bold text-teal-blue-600 text-center'>todos</h1>

      <div className='my-10 '>
        <AddTodo />
        
      </div>
    </section>
      </div>
    
    </React.Fragment>
  );
}
export default TodoList