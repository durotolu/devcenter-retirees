import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <div className="font-semibold text-h4">Logo</div>
          <div>About</div>
          <div>How it works</div>
        </div>
        <nav>
          <ul className="flex space-x-6 text-gray-600">
            <Link className="bg-primary-600 text-white text-body rounded py-3 px-14" to={'/register'}>Register</Link>
            <Link className="border border-primary-600 text-primary-600 text-body rounded py-3 px-8"to={'/login'}>Login</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
