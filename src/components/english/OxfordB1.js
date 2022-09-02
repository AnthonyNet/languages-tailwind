import React, { useState } from "react";
import CardButton from '../card/CardButton';
import CardHint from "../card/CardHint";
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

        <ul className="flex justify-around text-center mt-8">

        <CardButton
          onClick={randomWord}
          text={"Next word"}
         />

         <CardButton
        onClick={() => setSwitchLanguage(!switchLanguage)}
         text={switchLanguage ? "CZ ➜ ENG" : "ENG ➜ CZ"}
          />
          
        </ul>
      </div>
    </section>
  );
};

export default OxfordB1;
