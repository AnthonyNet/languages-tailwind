import React from "react";

import Navbar from "../components/navbar/Navbar";
import Main from "../components/main/Main";

const Home = () => {
  return (
    <div className="w-full h-auto sm:h-[100vh]">
      <Navbar />
      <Main  />
    </div>
  );
};

export default Home;
