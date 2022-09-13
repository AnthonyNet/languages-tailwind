import React from "react";
import Navbar from '../components/navbar/Navbar'

import Irregular from '../components/english/Irregular'
import dataJSON from '../components/data/json/IrregularVerbs'

const English = () => {

  return (
    <>
    <Navbar />
    <Irregular dataJSON={dataJSON}/>
    </>
  );
};

export default English;
