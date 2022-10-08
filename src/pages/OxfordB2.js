import React from 'react';
import Navbar from '../components/navbar/Navbar';
import OxfordB2 from '../components/card/Card';
import dataJSON from '../components/data/json/OxfordB2'

const SearchIrregularEng = () => {
  return (
    <>
    <Navbar />
    <OxfordB2 dataJSON={dataJSON} />
    </>
  )
}

export default SearchIrregularEng