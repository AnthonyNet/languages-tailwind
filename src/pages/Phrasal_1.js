import React from "react";
import Navbar from "../components/navbar/Navbar";
import Phrasal1 from "../components/card/Card";
import dataJSON from "../components/data/json/LukesPhrasal";

const Phrasal = () => {
  return (
    <>
      <Navbar />
      <Phrasal1 dataJSON={dataJSON} />
    </>
  );
};

export default Phrasal;
