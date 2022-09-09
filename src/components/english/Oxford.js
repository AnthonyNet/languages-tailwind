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
      <div className="w-full sm:w-[30rem]  pb-8 border-double border-4 border-indigo-600 rounded-lg shadow-lg bg-white text-center">
      {/*IF czWord exists */}
      <ul className="flex flex-col justify-around text-center ">
      {
        <li className="font-bold cardListItems p-6">
          
            {switchLanguage ? (
              <article>{data[rand].wordTranslated}</article>
              
            ) : (
              <article>{data[rand].czWord}</article>
            )}
         
        </li>
      }


      {data[rand].sentenceTranslated? (
            switchLanguage &&( <li className="cardListItems">{data[rand].sentenceTranslated}</li>)
        ):null}

        
       
            {transparent ? (
              <li  className="cardListItems" 
              onClick={() => setTransparent(!transparent)}>show answer</li>
            ) : (
              <li className="flex flex-row flex-wrap justify-center items-center cardListItems" onClick={() => setTransparent(!transparent)}>
                
                <strong className="w-[95%] sm:w-[92%]">{switchLanguage ? data[rand].czWord : data[rand].wordTranslated}</strong>
                <div className="oxfordClose sm:mr-2"><CgClose  /></div>
             
                <div>
                {!switchLanguage && data[rand].sentenceTranslated}
                </div>
              </li>
            )}
         

        <ul className="flex justify-around text-center mt-8">
          <CardButton onClick={randomWord} text={"Next word"} />

          <CardButton
            onClick={() => setSwitchLanguage(!switchLanguage)}
            text={switchLanguage ? "CZ ➜ ENG" : "ENG ➜ CZ"}
          />
        </ul>
       </ul>
      </div>
    </section>
  );
};

export default OxfordB1;
