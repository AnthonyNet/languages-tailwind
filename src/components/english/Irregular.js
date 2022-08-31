import React, {useEffect, useState } from "react";
import { BsFillStarFill } from "react-icons/bs";


import Data from "../data/json/IrregularVerbs";
import getLocalStorage from "../Functions";


const IrregularVerbs = () => {
  const [totalScore, setTotalScore] = useState(getLocalStorage());
  const [score, setScore] = useState(0);
  const [hint, setHint] = useState(false);
  const [rand, setRand] = useState(0);


{/*the function gives stars depends on score number */}
  const runMe = (score) => {
    switch (score) {
      case 1:
        return (
          <span>
            <BsFillStarFill />
          </span>
        );
        break;
      case 2:
        return (
          <span>
            <BsFillStarFill />
            <BsFillStarFill />
          </span>
        );
        break;
      case 3:
        return (
          <span>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </span>
        );
        break;
      case 4:
        return (
          <span>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </span>
        );
        break;
      case 5:
        return (
          <span>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </span>
        );

      default:
        return <span>ㅤ</span>;
    }
  };

  {/*check inputs values and change font, border or background */}
  const handleChange = (e) => {
  const value = e.target.value;
  const data = e.target.attributes.data.value;

    const inputElement = e.target;
    if (value === "") {
      inputElement.style.color = "gray";
    } else if (data === value) {
    // inputElement.parentElement.style.backgroundColor = "MediumSeaGreen";
   
     inputElement.readOnly = true;
      setTotalScore((count) => +count + 1);
      setScore((count) => count + 1);
    } else if (data.startsWith(value)) {
      inputElement.style.color = "green";
      inputElement.style.fontWeight = "bold";
    } else {
      inputElement.style.color = "red";
      inputElement.style.fontWeight = "bold";
    }
  };


  

  {/* Gives a random number -> word from a list
      Change input styles to default
*/}
  function randomWord(e) {
    setRand(Math.floor(Math.random() * Data.length));
    const quizInput = e.target.previousSibling.childNodes;

    quizInput.forEach((input) => {
      input.style.backgroundColor = "transparent";
      input.firstChild.style.color = "gray";
      input.firstChild.style.fontWeight = "normal";
      input.firstChild.readOnly = false;
      input.firstChild.value = "";
    });
    //setScore(0);
    setHint(false);
  }

  

  return (
    <section className="flex justify-center items-center w-full h-[91vh]">
      <div className="rounded-lg shadow-lg bg-white max-w-sm text-center">
        <div className="scoreDiv py-3 px-6 border-b border-gray-300">
          {runMe(score)}
        </div>
        <div className="py-3 px-6 border-b border-gray-300">
          Celkové skóre: <span>{totalScore > 0 ? totalScore : 0}</span>
        </div>

        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2 border-b border-gray-300">
            {Data[rand].cz}
          </h5>
          <ul className="flex flex-col justify-around text-center mb-2">
            <li
            className="p-2">
              <input
                className="quizInput text-center border border-gray-300"
                data={Data[rand].base}
                type="text"
                placeholder="Infinitive"
                onChange={handleChange}
              ></input>
            </li>
            <li
            className="p-2">
              <input
                className="quizInput text-center border border-gray-300"
                data={Data[rand].pastSimple}
                type="text"
                placeholder="Past Simple"
                onChange={handleChange}
              ></input>
            </li>

            {Data[rand].pastSimple2 ? (
              <li className="p-2">
                <input
                  className="quizInput text-center border border-gray-300"
                  data={Data[rand].pastSimple2}
                  type="text"
                  placeholder="Past Simple2"
                  onChange={handleChange}
                ></input>
              </li>
            ) : null}

            <li className="p-2">
              <input
                className="quizInput text-center border border-gray-300"
                data={Data[rand].pastParticiple}
                type="text"
                placeholder="Past Participle"
                onChange={handleChange}
              ></input>
            </li>

            {Data[rand].pastParticiple2 ? (
              <li className="p-2">
                <input
                  className="quizInput text-center border border-gray-300"
                  data={Data[rand].pastParticiple2}
                  type="text"
                  placeholder="Past Participle 2"
                  onChange={handleChange}
                ></input>
              </li>
            ) : null}
          </ul>
{/*the function gives new random word & set up styles to default */}
          <button
            onClick={randomWord}
            type="button"
            className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Next word
          </button>
        </div>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">

        {/* button toggle hint !hint */}
          <button
            onClick={() => setHint((hint) => !hint)}
            type="button"
            className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Nápověda
          </button>

          {/* if hint is true show answers */}
          {hint ? (
            <ul className="flex justify-between">
              <li>{Data[rand].base}</li>
              <li>{Data[rand].pastSimple}</li>
              {Data[rand].pastSimple2 ? (
                <li>{Data[rand].pastSimple2}</li>
              ) : null}
              <li>{Data[rand].pastParticiple}</li>
              {Data[rand].pastParticiple2 ? (
                <li>{Data[rand].pastParticiple2}</li>
              ) : null}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default IrregularVerbs;
