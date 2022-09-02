import React from 'react';
import Navbar from '../components/navbar/Navbar';
import OxfordC1 from '../components/english/Oxford';
import dataJSON from '../components/data/json/OxfordC1'

const SearchIrregularEng = () => {
  return (
    <>
    <Navbar />
    <OxfordC1 dataJSON={dataJSON} />
    </>
  )
}

export default SearchIrregularEng