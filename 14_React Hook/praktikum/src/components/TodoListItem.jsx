import React, { useEffect } from 'react'
import '../styling/TodoListItem.css'
import ListTodo from './ListTodo'

const TodoListItem = (props) => {

    const {data, deleteTodoItem, editTodoItem} = props

    useEffect(() => {
      console.log(data);
    },[data])
    
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