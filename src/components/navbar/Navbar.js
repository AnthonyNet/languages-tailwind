import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";

import IrregularVerbsEng from "../data/json/IrregularVerbs";
import OxfordB1 from "../data/json/OxfordB1";
import OxfordB2 from '../data/json/OxfordB2';
import OxfordC1 from '../data/json/OxfordC1';
import LukesPhrasal from '../data/json/LukesPhrasal';

import VerbenData from "../data/json/VerbenData";
import Goethe from "../data/json/Goethe";

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
                <summary className="uppercase logo"><strong className="hover:text-sky-700">English</strong></summary>
                <ul className="flex flex-col border-solid border-t-4 border-sky-400">
                  <Link to="/english">{`Irregular Verbs (${IrregularVerbsEng.length})`}</Link>
                  <Link to="/irregularSearch">{`Irregular List (${IrregularVerbsEng.length})`}</Link>
                  <Link to="/oxford-B1">{`Oxford B1 (${OxfordB1.length})`}</Link>
                  <Link to="/oxford-B2">{`Oxford B2 (${OxfordB2.length})`}</Link>
                  <Link to="/oxford-C1">{`Oxford C1 (${OxfordC1.length})`}</Link>
                  <Link to="/phrasal-1">{`Phrasal Verbs-1 (${LukesPhrasal.length})`}</Link>

                </ul>
              </details>
              
              <details className="cursor-pointer">
                <summary className="uppercase logo"><strong className="hover:text-sky-700">Deutsch</strong></summary>
                <ul className="flex flex-col border-solid border-t-4 border-sky-400">
                  <Link to="/german">{`Unregelmäßige Verben (${VerbenData.length})`}</Link>
                  <Link to="/goethe">{`Goethe (${Goethe.length})`}</Link>
                  
                </ul>
              </details>
        </ul>
        <div className="text-4xl md:hidden">
          <TiThMenu onClick={handleNav} />
        </div>
      </div>

      <div
        className={nav ? "z-10 fixed left-0 top-0 w-full h-screen bg-black/70" : "z-0"}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 "
              : "fixed top-10 left-[-100%] ease-in duration-500"
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
            <ul className="flex flex-col text-2xl z-20">
              <Link className="py-4 uppercase" to="/">
                Home
              </Link>

              <details className="py-4 cursor-pointer">
                <summary className="uppercase border-gray-300 border-b logo"><strong>English</strong></summary>
                <ul className="flex flex-col">
                  <Link to="/english">Irregular verbs</Link>
                  <Link to="/irregularSearch">Irregular List</Link>
                  <Link to="/oxford-B1">Oxford B1</Link>
                  <Link to="/oxford-B2">Oxford B2</Link>
                  <Link to="/oxford-C1">Oxford C1</Link>
                  <Link to="/phrasal-1">Phrasal verbs</Link>
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
