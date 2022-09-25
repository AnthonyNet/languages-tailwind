import React from 'react';
import Navbar from '../components/navbar/Navbar';

import Pagination from '../components/Pagination/Pagination';
import dataJSON from '../components/data/json/OxfordB1'

const SearchIrregularEng = () => {
  return (
    <>
    <Navbar />
    <Pagination dataJSON={dataJSON} />
    </>
  )
}

export default SearchIrregularEng