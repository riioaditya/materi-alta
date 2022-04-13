import React from "react";
import NavBar from "./NavBar";

const AboutApp = () => {
  return (
    <>
      <div className="flex justify-center">
        <NavBar />
      </div>
      <div className="flex justify-center pt-20">
        <div>
        <h1 className="flex justify-center pb-10 text-4xl font-bold">
          About App
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius cum
          sint sed. Amet sit nobis odit repudiandae, atque dolore modi!
        </p>
        </div>
      </div>
    </>
  );
};

export default AboutApp;
