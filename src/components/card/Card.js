import React from 'react'
import Irregular from '../irregular_Verbs/Irregular'


const Card = ({data, handleChange, placeholder}) => {
  {/*check inputs values and change font, border or background */}
 

  return (
    <>
          <li
            className="p-2">
              <input
                className="quizInput text-center border border-gray-300"
                data={data}
                type="text"
                placeholder={placeholder}
                onChange={handleChange}
              ></input>
            </li>
        
    </>
  )
}

export default Card