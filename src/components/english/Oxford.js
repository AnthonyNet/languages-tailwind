import React, { useEffect, useState } from "react";
import CardButton from "../card/CardButton";
import { CgClose } from "react-icons/cg";


//import Data from "../data/json/OxfordB1";

const OxfordB1 = ({ dataJSON }) => {
  const [data, setData] = useState(dataJSON);
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
      {/*IF czWord exists */}
      {
        <div className=" border-b border-gray-300 font-bold">
          <ul>
            {switchLanguage ? (
              <li>{data[rand].wordTranslated}</li>
              
            ) : (
              <li>{data[rand].czWord}</li>
            )}
          </ul>
        </div>
      }


      {data[rand].sentenceTranslated? (
          <div className={switchLanguage?"border-b border-gray-300 font-bold":"hidden"}>
          <ul className="flex flex-col justify-around text-center m-6">
            {switchLanguage ? (
              <li>{data[rand].sentenceTranslated}</li>
              
            ) : (
              <li>{data[rand].czSentence}</li>
            )}
          </ul>
        </div>
        ):null}

        <div className="py-3 px-6 border-b border-gray-300">
          <ul className="m-2">
            {transparent ? (
              <li onClick={() => setTransparent(!transparent)}>show answer</li>
            ) : (
              <li className="flex flex-col" onClick={() => setTransparent(!transparent)}>
                <div className="relative"><CgClose className="absolute right-0 top-1 " /></div>
                <strong>{switchLanguage ? data[rand].czWord : data[rand].wordTranslated}</strong>
                
             
                <div>
                {switchLanguage ? data[rand].czSentence : data[rand].sentenceTranslated}
                </div>
              </li>
            )}
          </ul>
        </div>

        <ul className="flex justify-around text-center mt-8">
          <CardButton onClick={randomWord} text={"Next word"} />

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
