import React, { useEffect, useState } from "react";

import Card from "../card/Card";
import CardButton from '../card/CardButton';
import CardHint from "../card/CardHint";



// import functions
import getLocalStorage from "../Functions";
import Score from "../card/Score";

const IrregularVerbs = ({dataJSON}) => {
  const [totalScore, setTotalScore] = useState(getLocalStorage());
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [hint, setHint] = useState(false);
  const [rand, setRand] = useState(0);

  useEffect(() => {
    localStorage.setItem("totalScore", JSON.stringify(totalScore));
}, [totalScore]);

  {
    /*check inputs values and change font, border or background */
  }
  const handleChange = (e) => {
    const value = e.target.value;
    const data = e.target.attributes.data.value;

    const inputElement = e.target;
    if (value === "") {
      inputElement.style.color = "gray";
    } else if (data === value) {
      inputElement.parentElement.style.backgroundColor = "MediumSeaGreen";

      inputElement.readOnly = true;
      setTotalScore((count) => +count + 1);
      setScore((count) => count + 1);
      setStars((count) => count + 1);
    } else if (data.startsWith(value)) {
      inputElement.style.color = "green";
      inputElement.style.fontWeight = "bold";
    } else {
      inputElement.style.color = "red";
      inputElement.style.fontWeight = "bold";
    }
  };

  {
    /* Gives a random number -> word from a list
      Change input styles to default
*/
  }
  function randomWord(e) {
    setRand(Math.floor(Math.random() * dataJSON.length));
    const quizInput = e.target.previousSibling.childNodes;

    quizInput.forEach((input) => {
      input.style.backgroundColor = "transparent";
      input.firstChild.style.color = "gray";
      input.firstChild.style.fontWeight = "normal";
      input.firstChild.readOnly = false;
      input.firstChild.value = "";
    });
    setStars(0);
    setHint(false);
  }

  return (
    <section className="flex justify-center items-center w-full h-[91vh]">
      <div className="rounded-lg shadow-lg bg-white max-w-sm text-center">

        <div className="py-3 px-6 border-b border-gray-300">
          Celkové skóre: <span>{totalScore > 0 ? totalScore : 0}</span>
        </div>
        <div className="py-3 px-6 border-b border-gray-300">
          Momentální skóre: <span>{score > 0 ? score : 0}</span>
        </div>

        <Score score={stars} />

        <div className="px-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2 border-b border-gray-300">
            {dataJSON[rand].cz}
          </h5>
          <ul className="flex flex-col justify-around text-center mb-2">
            <Card
              data={dataJSON[rand].base}
              handleChange={handleChange}
              placeholder="Infinitive"
            ></Card>
            <Card
              data={dataJSON[rand].pastSimple}
              handleChange={handleChange}
              placeholder="PastSimple"
            ></Card>

            {dataJSON[rand].pastSimple2 ? (
              <Card
                data={dataJSON[rand].pastSimple2}
                handleChange={handleChange}
                placeholder="PastSimple2"
              ></Card>
            ) : null}

            <Card
              data={dataJSON[rand].pastParticiple}
              handleChange={handleChange}
              placeholder="PastParticiple"
            ></Card>

            {dataJSON[rand].pastParticiple2 ? (
              <Card
                data={dataJSON[rand].pastParticiple2}
                handleChange={handleChange}
                placeholder="PastParticiple2"
              ></Card>
            ) : null}
          </ul>
          {/*the function gives new random word & set up styles to default */}
         <CardButton
         onClick= {randomWord}
         text="next word"
          />
        </div>
        <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
          {/* button toggle hint !hint */}
        <CardButton
            onClick={() => setHint((hint) => !hint)}
            text="hint"
       />   
          

          {/* if hint is true show answers */}
          {hint ? (
         <CardHint 
          base = {dataJSON[rand].base}
          pastSimple = {dataJSON[rand].pastSimple}
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
