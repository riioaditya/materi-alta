import { Component } from "react";
import '../styling/TodoInput.css'

class TodoInput extends Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const formIsNotEmpty = this.state.title;
        console.log('test',this.state.title);
        if(formIsNotEmpty){
          const newTodoInput = {
            title : this.state.title,
/*             complete : this.state.completed
 */          }
          this.props.addTodoItem(newTodoInput);
          this.setState({
            title : "",
/*             completed : false
 */          })
        }
        else{
          alert("masih ada data yang kosong")
        }
      }

    render(){
      
        return(
            <div>
                
                <div className="containerAddTodo">
                <input className='addText' onChange={(input) => this.setState({title:  input.target.value}) } placeholder='Add todo...' type="text" />
                <button className= 'submitButton' onClick={this.handleSubmit} >Submit</button>
                </div>
            </div>
        )
    }
}

export default TodoInput