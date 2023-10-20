import React from "react";

//need to make utility classes for text so im not repeating again
const Header = () => {
  return (
    <div className="w-screen bg-primary-green flex items-center p-1">
      <h1 className="basic_text_italic text-5xl pl-5">stocksTBD</h1>
      <p className="basic_text_italic text-xl ml-auto pr-5">Log In</p>
    </div>
  );
};

export default Header;
