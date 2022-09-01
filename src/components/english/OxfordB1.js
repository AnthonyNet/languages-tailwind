import React, { useState } from "react";
import Data from "../data/json/OxfordB1";

const OxfordB1 = () => {
  const [data, setData] = useState(Data);
  const [rand, setRand] = useState(0);
  const [switchLanguage, setSwitchLanguage] = useState(true);
  const [transparent, setTransparent] = useState(true);

  const randomWord = () => {
    setRand(Math.floor(Math.random() * data.length));
    setTransparent(true);
  };

  return (
    <section className="flex justify-center items-center w-full h-[100vh] p-2 sm:p-0">
      <div className="w-full sm:w-[30rem]  py-8 border-double border-4 border-indigo-600 rounded-lg shadow-lg bg-white text-center">
        <div className="scoreDiv py-3 px-6 border-b border-gray-300 font-bold">
          <ul className="flex flex-col justify-around text-center mb-2">
            {switchLanguage ? (
              <li>{data[rand].eng}</li>
            ) : (
              <li>{data[rand].cz}</li>
            )}
          </ul>
        </div>

        <div className="scoreDiv py-3 px-6 border-b border-gray-300">
          <ul className="flex flex-col justify-around text-center mb-2">
            {transparent ? (
              <li onClick={() => setTransparent(!transparent)}>show answer</li>
            ) : (
              <li onClick={() => setTransparent(!transparent)}>
                {switchLanguage ? data[rand].cz : data[rand].eng}
              </li>
            )}
          </ul>
        </div>

        <ul className="flex justify-around text-center">
          <button
            onClick={randomWord}
            type="button"
            className="font-bold w-2/3 mt-8 py-4 bg-blue-600  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Next word
          </button>

          <button
            onClick={() => setSwitchLanguage(!switchLanguage)}
            type="button"
            className="mt-8 py-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            {switchLanguage ? "CZ ➜ ENG" : "ENG ➜ CZ"}
          </button>
        </ul>
      </div>
    </section>
  );
};

export default OxfordB1;
