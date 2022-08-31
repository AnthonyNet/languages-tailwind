import React from 'react'
import Irregular2 from '../english/Irregular2'

const CardHint = ({base, pastSimple, pastSimple2, pastParticiple, pastParticiple2}) => {
  return (
    <ul className="flex justify-between">
    <li>{base}</li>
    <li>{pastSimple}</li>
    {pastSimple2 ? (
      <li>{pastSimple2}</li>
    ) : null}
    <li>{pastParticiple}</li>
    {pastParticiple2 ? (
      <li>{pastParticiple2}</li>
    ) : null}
  </ul>
  )
}

export default CardHint
