import React from "react";
import AddTodo from "./AddTodo";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
    <div className="flex justify-center">
      <NavBar />

    </div>
    <div className="flex justify-center pt-32 pb-28">
      <h1 className="text-teal-blue-500 font-bold text-9xl">todos</h1>
      {/* <h1>todos</h1> */}
    </div>
    <div className="flex justify-center">
      <AddTodo />
    </div>
    </>
  )
};

export default Home;
