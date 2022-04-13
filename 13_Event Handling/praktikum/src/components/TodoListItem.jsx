import React from 'react'
import '../styling/TodoListItem.css'
import ListTodo from './ListTodo'

const TodoListItem = (props) => {

    const {data, deleteTodoItem, editTodoItem} = props
    /* console.log(editTodoItem); */

  return (
    <div>
        <ul>
            { data.map((todoItem) => (
            <ListTodo 
            key={todoItem.id}
            editTodoItem={editTodoItem} 
            item={todoItem} 
            deleteTodoItem={deleteTodoItem} />)
            )
            }
        </ul>
    </div>
  )
}

export default TodoListItem