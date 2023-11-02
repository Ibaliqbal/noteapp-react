import React from "react";

const Header = ({ justify, children }) => {
  return (
    <header className="w-full">
      <div className="container">
        <div
          className={`w-full text-white flex px-4 py-4 items-center ${justify}`}
        >
          {children}
        </div>
      </div>
    </header>
  );
}

export default Header;
