import React from 'react';
import Navbar from '../components/navbar/Navbar';
import OxfordC1 from '../components/card/Card';
import dataJSON from '../components/data/json/Goethe'

const SearchIrregularEng = () => {
  return (
    <>
    <Navbar />
    <OxfordC1 dataJSON={dataJSON} />
    </>
  )
}

export default SearchIrregularEng