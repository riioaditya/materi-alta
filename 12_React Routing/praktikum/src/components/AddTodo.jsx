import React, { Component } from "react";
import "../styling/AddTodo.css";
import { v4 as uuidv4 } from "uuid";
import TodoListItem from "./TodoListItem";
import TodoInput from "./TodoInput";
import NavBar from "./NavBar";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
    };
  }

  deleteTodoItem = (id) => {
    const delTodo = this.state.data.filter((todoList) => todoList.id !== id);
    this.setState({ data: delTodo });
  };

  addTodoItem = (newTodo) => {
    const newTodoList = { 
      id: uuidv4(), 
      ...newTodo , 
      completed : false};

    this.setState({ data: [...this.state.data, newTodoList] });
  };

  editTodoItem = (id) => {
    /* const editTodo = this.state.data.filter((todoList) => todoList.id === id); */
    /* this.setState({data: editTodo}) */
    const editTodo = this.state.data.map((todo) => {
      if(todo.id == id){
        todo.completed = !todo.completed;
      }
      return todo;
    })
    console.log(editTodo);
    this.setState({ data: editTodo });

  };

  render() {
    return (
      <div className="flex text-center" style={{flexDirection: "column"}}>
        <div className="" onClick={this.handleOpenInput}>
          {/* <span className='addText' placeholder='Add todo...' placeholderTextColor= 'red'></span> */}
          {/* <span className='buttonSubmit'><a href='#'>Submit</a></span> */}
          <TodoInput addTodoItem={this.addTodoItem} />
        </div>
        <div className="flex justify-center pt-16">
          <TodoListItem
            data={this.state.data}
            deleteTodoItem={this.deleteTodoItem}
            editTodoItem={this.editTodoItem}
          />
        </div>
      </div>
    );
  }
}

export default AddTodo;
