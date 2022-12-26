import React from "react";

const Card_Inputs = ({ myData, setTotalScore, setScore, setStars }) => {
  {
    /*check inputs values and change font, border or background */
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const data = e.target.attributes.data.value;

    const inputElement = e.target;
    /*
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
    }*/

    if (value === "") {
      inputElement.style.color = "gray";
    }

    if (data === value) {
      inputElement.parentElement.style.backgroundColor = "MediumSeaGreen";
      inputElement.readOnly = true;

      setTotalScore((count) => +count + 1);
      setScore((count) => count + 1);
      setStars((count) => count + 1);
    }
    if (data.startsWith(value)) {
      inputElement.style.color = "green";
      inputElement.style.fontWeight = "bold";
    } else {
      inputElement.style.color = "red";
      inputElement.style.fontWeight = "bold";
    }
  };

  return (
    <>
      <h5 className={"text-xl font-medium mb-2 border-b border-gray-300"}>
        {myData.cz}
      </h5>
      <ul className="flex flex-col justify-around text-center mb-2">
        <li className="p-2">
          <input
            type="text"
            className="quizInput text-center border border-gray-300"
            placeholder="Přítomný čas"
            data={myData.base}
            onChange={handleChange}
          />
        </li>
        <li className="p-2">
          <input
            type="text"
            className="quizInput text-center border border-gray-300"
            placeholder="Minulý čas prostý"
            data={myData.pastSimple}
            onChange={handleChange}
          />
        </li>
        {myData.pastSimple2 ? (
          <li className="p-2">
            <input
              type="text"
              className="quizInput text-center border border-gray-300"
              placeholder="Minulý čas prostý 2"
              data={myData.pastSimple2}
              onChange={handleChange}
            />
          </li>
        ) : null}
        <li className="p-2">
          <input
            type="text"
            className="quizInput text-center border border-gray-300"
            placeholder="Minulé příčestí"
            data={myData.pastParticiple}
            onChange={handleChange}
          />
        </li>
        {myData.pastParticiple2 ? (
          <li className="p-2">
            <input
              type="text"
              className="quizInput text-center border border-gray-300"
              placeholder="Minulé příčestí 2"
              data={myData.pastParticiple2}
              onChange={handleChange}
            />
          </li>
        ) : null}
      </ul>
    </>
  );
};

export default Card_Inputs;
