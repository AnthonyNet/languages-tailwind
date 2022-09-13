import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Irregular from '../components/deutsch/Verben'

import dataJSON from '../components/data/json/VerbenData'

const German = () => {
  return (
    <div>
      <Navbar />
      <Irregular dataJSON={dataJSON}/>
    </div>
  )
}

export default German