import React, { useEffect, useState, useContext } from "react";
import CardButton from "./CardButton";
import { CgClose } from "react-icons/cg";
import { ThemeContext } from "../../ThemeContext";

{
  /* Card component is used in OXford B1, B2, C1 & Göethe
    
  */

}

const Card = ({ dataJSON }) => {
  const [data, setData] = useState(dataJSON);
  const [rand, setRand] = useState(0);
  const [switchLanguage, setSwitchLanguage] = useState(true);
  const [hidden, setHidden] = useState(true);
  const {darkMode, stylesSwitch} = useContext(ThemeContext);


  const CardTrue = () => {
   
      return (
        <>
          <li  className="cardListItems">{data[rand].wordTranslated}</li>

          {data[rand].sentenceTranslated?(
            <li  className="cardListItems">{data[rand].sentenceTranslated}</li>
          ):null}

          {/* if hidden is true, answers are hidden */}

          <li
              className={hidden?"hidden":"visible flex items-center cardListItems"}
              onClick={() => setHidden(!hidden)}
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
            className={hidden?"hidden":"visible flex items-center cardListItems"}
            onClick={() => setHidden(!hidden)}
          >
            <strong className="m-auto mr-auto">
              {data[rand].wordTranslated}
            </strong>
            <div className="-mr-4">
              <CgClose />
            </div>
          </li>
          {data[rand].sentenceTranslated?(
          <li  className={hidden?"hidden":"visible  items-center  cardListItems  w-full"}
          onClick={() => setHidden(!hidden)}
          >{data[rand].sentenceTranslated}</li>
        ):null}
      </>
    );
  }

  const randomWord = () => {
    setRand(Math.floor(Math.random() * data.length));
    setHidden(true);
  };

  return (
    <section className="flex justify-center items-center w-full h-[100vh] p-2 sm:p-0 responsiveSection"
     style={darkMode?stylesSwitch.dark.slate:stylesSwitch.hidden}
    >
      <div className="w-full sm:w-[30rem]  pb-8 card"
       style={darkMode?stylesSwitch.dark.basic:stylesSwitch.hidden}
      >
        <ul className="flex flex-col justify-around text-center font-semibold italic">
        {/* true = Foreign language to Czech false = Czech to Foeign language */}
          {switchLanguage? <CardTrue />: <CardFalse />}

          {hidden ? (
            <li
              className="cardListItems text-cyan-500"
              onClick={() => setHidden(!hidden)}
            >
              show answer
            </li>
          ) : null
          }

          <li className="flex justify-around text-center mt-8">
            <CardButton onClick={randomWord} text={"Next word"} />

            <CardButton
              onClick={() => [setSwitchLanguage(!switchLanguage), setHidden(true)]}
              text={switchLanguage ? "CZ ➜ ENG" : "ENG ➜ CZ"}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Card;
