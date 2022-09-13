import React from "react";
import Navbar from '../components/navbar/Navbar'

import Irregular from '../components/irregular_Verbs/Irregular'
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
