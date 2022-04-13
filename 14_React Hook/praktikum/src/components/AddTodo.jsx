import React, { useCallback, useEffect, useState } from "react";
import "../styling/AddTodo.css";
import { v4 as uuidv4 } from "uuid";
import TodoListItem from "./TodoListItem";
import TodoInput from "./TodoInput";


const AddTodo = () => {
  const initialData = [
    {
      id: uuidv4(),
      title: "Mengerjakan Exercise",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "Mengerjakan Assignment",
      completed: false,
    },
  ];

      const [dataTodos,setDataTodos] = useState(initialData);
      
      const addTodoItem = (newTodo) => {
        const newTodoList = { 
          id: uuidv4(), 
          ...newTodo , 
          completed : false };
          setDataTodos([...dataTodos, newTodoList]);
          console.log(dataTodos);
          //console.log("ini add todo item");
      }

      const deleteTodoItem = useCallback((id) => {
        setDataTodos(dataTodos.filter(((todoList) => todoList.id !== id)))

      },[dataTodos])

      const editTodoItem = (id) => {
        const editedTodo = dataTodos.map((todo) => {
          if(todo.id === id){
            return {
              ...todo, 
              completed : !todo.completed
            }
          }
          return todo;
        })
        setDataTodos(editedTodo);
      }

      useEffect(() => {
        console.log(dataTodos);
      },[dataTodos])

      return (
        <div className="flex text-center" style={{flexDirection: "column"}}>
          <div>
            <TodoInput addTodoItem={addTodoItem} />
          </div>
          <div className="flex justify-center pt-16">
            <TodoListItem
              data={dataTodos}
              deleteTodoItem={deleteTodoItem}
              editTodoItem={editTodoItem}
            />
          </div>
        </div>
      );
    };

export default AddTodo;
