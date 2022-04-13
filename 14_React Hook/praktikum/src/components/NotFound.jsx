import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NotFound = () => {
  const homeLink = () => {
    <Link to="/">Home</Link>
  }
  return (
    <>
      {/* <div>404NotFound</div> */}
      <div>
        {/* <img src="../images/404.png" alt="" /> */}
        <img src={require("../images/3747371.jpg")} />
      </div>
      <div className="flex justify-center text-3xl">
        <span className="border-4 p-3 mb-5">kembali ke <Link className="text-blue-700" to="/">Home</Link></span>
      </div>
    </>
  );
};

export default NotFound;
