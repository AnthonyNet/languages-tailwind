import React, { useEffect, useState, useContext } from "react";
import CardButton from "./CardButton";
import { CgClose } from "react-icons/cg";
import { ThemeContext } from "../../ThemeContext";



const Card = ({ dataJSON }) => {
  const [data, setData] = useState(dataJSON);
  const [rand, setRand] = useState(0);
  const [switchLanguage, setSwitchLanguage] = useState(true);
  const [transparent, setTransparent] = useState(true);
  const {darkMode, stylesSwitch} = useContext(ThemeContext);


  const CardTrue = () => {
   
      return (
        <>
          <li  className="cardListItems">{data[rand].wordTranslated}</li>

          {data[rand].sentenceTranslated?(
            <li  className="cardListItems">{data[rand].sentenceTranslated}</li>
          ):null}

          <li
              className={transparent?"hidden":"visible flex items-center cardListItems"}
              onClick={() => setTransparent(!transparent)}
            >
              <strong className="m-auto mr-auto">
                {data[rand].czWord}
              </strong>
              <div className="-mr-4">
                <CgClose />
              </div>
            </li>
        </>
      );
  };

  const CardFalse = () =>{
    return (
      <>
        <li  className="cardListItems">{data[rand].czWord}</li>

        <li
            className={transparent?"hidden":"visible flex items-center cardListItems"}
            onClick={() => setTransparent(!transparent)}
          >
            <strong className="m-auto mr-auto">
              {data[rand].wordTranslated}
            </strong>
            <div className="-mr-4">
              <CgClose />
            </div>
          </li>
          {data[rand].sentenceTranslated?(
          <li  className={transparent?"hidden":"visible  items-center  cardListItems  w-full"}
          onClick={() => setTransparent(!transparent)}
          >{data[rand].sentenceTranslated}</li>
        ):null}
      </>
    );
  }

  const randomWord = () => {
    setRand(Math.floor(Math.random() * data.length));
    setTransparent(true);
  };

  return (
    <section className="flex justify-center items-center w-full h-[100vh] p-2 sm:p-0"
     style={darkMode?stylesSwitch.dark.slate:stylesSwitch.transparent}
    >
      <div className="w-full sm:w-[30rem]  pb-8 card">
        <ul className="flex flex-col justify-around text-center font-semibold italic">
          {switchLanguage? <CardTrue />: <CardFalse />}

          {transparent ? (
            <li
              className="cardListItems text-cyan-500"
              onClick={() => setTransparent(!transparent)}
            >
              show answer
            </li>
          ) : null
          }

          <li className="flex justify-around text-center mt-8">
            <CardButton onClick={randomWord} text={"Next word"} />

            <CardButton
              onClick={() => setSwitchLanguage(!switchLanguage)}
              text={switchLanguage ? "CZ ➜ ENG" : "ENG ➜ CZ"}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Card;
