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
    <nav className="w-full min-h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-start w-full h-full text-xl p-8">
        <aside className="logo w-1/3 mr-4">
          Learn <strong>languages</strong>
        </aside>
        <ul className="justify-around items-start w-full h-full hidden md:flex">
          <Link 
          to="/"
          >Home</Link>
          <details className="cursor-pointer">
                <summary className="uppercase logo"><strong>English</strong></summary>
                <ul className="flex flex-col border-solid border-t-4 border-indigo-600 ">
                  <Link to="/english">Irregular verbs</Link>
                  <Link to="/english2">Irregular verbs2</Link>
                  <Link to="/irregularSearch">Irregular List</Link>
                  <Link to="/oxford-B1">Oxford B1</Link>
                  <Link to="/oxford-B2">Oxford B2</Link>
                  <Link to="/oxford-C1">Oxford C1</Link>

                </ul>
              </details>
              
              <details className="cursor-pointer">
                <summary className="uppercase logo"><strong>Deutsch</strong></summary>
                <ul className="flex flex-col border-solid border-t-4 border-indigo-600">
                  <Link to="/german">Unregelmäßige Verben</Link>
                  <Link to="/goethe">Goethe</Link>
                  
                </ul>
              </details>
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
            <div onClick={handleNav} className="navClose rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <CgClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p>Evolution means everyday learning</p>
          </div>
          <nav>
            <ul className="flex flex-col text-2xl">
              <Link className="py-4 uppercase" to="/">
                Home
              </Link>

              <details className="py-4 cursor-pointer">
                <summary className="uppercase border-gray-300 border-b logo"><strong>English</strong></summary>
                <ul className="flex flex-col">
                  <Link to="/english">Irregular verbs</Link>
                  <Link to="/english2">Irregular verbs2</Link>
                  <Link to="/irregularSearch">Irregular List</Link>
                  <Link to="/oxford-B1">Oxford B1</Link>
                  <Link to="/oxford-B2">Oxford B2</Link>
                  <Link to="/oxford-C1">Oxford C1</Link>
                </ul>
              </details>

              <details className="cursor-pointer">
                <summary className="uppercase border-gray-300 border-b logo">Deutsch</summary>
                <ul className="flex flex-col">
                  <Link to="/german">Unregelmäßige Verben</Link>
                  <Link to="/goethe">Goethe</Link>
                  
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
