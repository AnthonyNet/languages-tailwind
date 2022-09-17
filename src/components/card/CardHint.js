import React from 'react'


const CardHint = ({base, pastSimple, pastSimple2, pastParticiple, pastParticiple2}) => {
  return (
    <ul className="flex justify-between flex-wrap">
    <li>{base} - </li>
    <li>{pastSimple} - </li>
    {pastSimple2&&<li>{pastSimple2} - </li>}
    <li>{pastParticiple}</li>
    {pastParticiple2 ? (
      <li> -{pastParticiple2}</li>
    ) : null}
  </ul>
  )
}

export default CardHint
