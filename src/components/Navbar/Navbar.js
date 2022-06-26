import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="sticky w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full text-xl p-8">
        <aside className="logo mr-40">
          Learn <strong>languages</strong>
        </aside>
        <ul className="justify-between items-center w-full h-full hidden md:flex">
          <Link 
          to="/"
          >Home</Link>
          <Link to="/english">English</Link>
          <Link to="/german">German</Link>
        </ul>
        <div className="text-4xl md:hidden">
          <TiThMenu onClick={handleNav} />
        </div>
      </div>

      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-10  ease-in duration-500"
          }
        >
          <div className="flex justify-between items-center">
            <aside className="logo mr-40">
              Learn <strong>languages</strong>
            </aside>
            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <CgClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p>Evolution means everyday learning</p>
          </div>
          <nav>
            <ul className="uppercase flex flex-col text-2xl">
              <Link className="py-4" to="/">
                Home
              </Link>

              <details className="py-4 cursor-pointer">
                <summary>English</summary>
                <ul className="flex flex-col">
                  <Link to="/english">English test</Link>
                  <Link to="/">File 2</Link>
                  <Link to="/">File 3</Link>
                </ul>
              </details>

              <details className="cursor-pointer">
                <summary>Deutsch</summary>
                <ul className="flex flex-col">
                  <Link to="/">File 1</Link>
                  <Link to="/">File 2</Link>
                  <Link to="/">File 3</Link>
                </ul>
              </details>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
