import { Component } from "react";
import "../styling/TodoInput.css";

class TodoInput extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const formIsNotEmpty = this.state.title;
    console.log("test", this.state.title);
    if (formIsNotEmpty) {
      const newTodoInput = {
        title: this.state.title,
        /*             complete : this.state.completed
         */
      };
      this.props.addTodoItem(newTodoInput);
      this.setState({
        title: "",
        /*             completed : false
         */
      });
    } else {
      alert("masih ada data yang kosong");
    }
  };

  render() {
    return (
      <div className="px-40">
        <div
          className="rounded-full w-auto h-8 px-10 items-center"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display: "flex",
          }}
        >
          <input
            
            onChange={(input) => this.setState({ title: input.target.value })}
            placeholder="Add todo..."
            type="text"
          />
          <button className="pl-72 items-center hover:text-blue-600" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default TodoInput;
