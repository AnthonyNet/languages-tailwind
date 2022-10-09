import React, { useEffect, useState } from "react";

import CardInputs from "../card/Card_Inputs";
import CardButton from "../card/CardButton";
import CardHint from "../card/CardHint";

// import functions
import getLocalStorage from "../Functions";
import Score from "../card/Score";

const IrregularVerbs = ({ dataJSON }) => {
  const [totalScore, setTotalScore] = useState(getLocalStorage());
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [hint, setHint] = useState(false);
  const [rand, setRand] = useState(0);


  useEffect(() => {
    localStorage.setItem("totalScore", JSON.stringify(totalScore));
  }, [totalScore]);

  {
    /* Gives a random number -> word from a list
      Change input styles to default
*/
  }
  function randomWord(e) {
    setRand(Math.floor(Math.random() * dataJSON.length));
  
    setStars(0);
    setHint(false);

    const myInputs = e.target.parentElement.previousSibling.querySelectorAll('input');

    myInputs.forEach((input) => {
     
      input.parentElement.style.backgroundColor = "transparent";
      input.style.color = "gray";
      input.style.fontWeight = "normal";
      input.readOnly = false;
      input.value = "";
     
    });

  }

  return (
    <section className="flex justify-center items-center w-full h-[91vh]">
      <div className="max-w-sm card">
        <div className="py-3 px-6 border-b border-gray-300">
          Celkové skóre: <span>{totalScore > 0 ? totalScore : 0}</span>
        </div>
        <div className="py-3 px-6 border-b border-gray-300">
          Momentální skóre: <span>{score > 0 ? score : 0}</span>
        </div>

        <Score score={stars} />

        <div className="px-6 inputs">
          <CardInputs
            myData={dataJSON[rand]}
            setTotalScore={setTotalScore}
            setScore={setScore}
            setStars={setStars}
            rand={rand}
            score={score}
           
          />
        </div>

        {/*the function gives new random word & set up styles to default */}
        <div className="border-t border-gray-300 text-gray-600">
          <CardButton onClick={randomWord} text="next word" />
        </div>

        <div className="border-t border-gray-300 text-gray-600">
          {/* button toggle hint !hint */}
          <CardButton onClick={() => setHint((hint) => !hint)} text="hint" />

          {/* if hint is true show answers */}
          {hint ? (
            <CardHint
              base={dataJSON[rand].base}
              pastSimple={dataJSON[rand].pastSimple}
              pastSimple2={dataJSON[rand].pastSimple2}
              pastParticiple={dataJSON[rand].pastParticiple}
              pastParticiple2={dataJSON[rand].pastParticiple2}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default IrregularVerbs;
