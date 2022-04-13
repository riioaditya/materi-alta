import { useState } from "react";
import "../styling/TodoInput.css";

const TodoInput = ({ addTodoItem }) => {
  /* const [getTitle, setTitle] = useState(""); */

   const [data,setData] = useState({
    title : ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    /* const formIsNotEmpty = title;
    console.log("test", title); */
    if (!!data) {
      const newTodoInput = {
        ...data,
        /*             complete : this.state.completed
         */
      };
      addTodoItem(newTodoInput);
      setData({
        title: "",
        /*             completed : false
         */
      });
    } else {
      alert("masih ada data yang kosong");
    }
    console.log(data);
  }
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
            onChange={(input) => setData({ title: input.target.value })}
            placeholder="Add todo..."
            type="text"
          />
          <button
            className="pl-72 items-center hover:text-blue-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    );
  };

export default TodoInput;
