import React from 'react';
import Navbar from '../components/navbar/Navbar';
import OxfordB1 from '../components/card/Card';
import dataJSON from '../components/data/json/OxfordB1'

const SearchIrregularEng = () => {
  return (
    <>
    <Navbar />
    <OxfordB1 dataJSON={dataJSON} />
    </>
  )
}

export default SearchIrregularEng