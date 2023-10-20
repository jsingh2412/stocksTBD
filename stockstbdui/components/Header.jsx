import React from "react";

//need to make utility classes for text so im not repeating again
const Header = () => {
  return (
    <header className="w-screen bg-primary-green flex items-center">
      <h1 className="text-white font-koho font-black italic text-5xl p-2 pl-5">
        stocksTBD
      </h1>
      <p className="ml-auto text-xl font-koho font-black text-white pr-5">
        Log In
      </p>
    </header>
  );
};

export default Header;
