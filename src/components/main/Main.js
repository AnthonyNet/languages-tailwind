import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import Table from "./Table";
import "./Main.css"

//This is a simple API for BitCoin currency
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

//The whole components is imported  into pages/Home

const Main = () => {
  const [myData, setMyData] = useState(null);
  const { darkMode } = useContext(ThemeContext);
  const { stylesSwitch } = useContext(ThemeContext);

  //Save API data into myData variable
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        setMyData(resp);
      });
  }, []);

  return (
    <section
      className={
        "responsiveSection flex flex-col justify-center items-center w-full min-h-[88vh] h-auto sm:h-[90%] border-red-300  border-t-2"
      }
      style={darkMode ? stylesSwitch.dark.slate : stylesSwitch.transparent}
    >
      <h1
        className="ml-[-50px] mt-2 sm:mt-0"
        style={darkMode ? stylesSwitch.dark.slate.font : null}
      >
        Welcome
      </h1>
      <h1 className="ml-[50px]">
        <strong>humans...</strong>
      </h1>
      <div className="mainCard w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
        <div className="preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
          <div className="border-2 w-full h-full">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg4.wikia.nocookie.net%2F__cb20081229142345%2Ffallout%2Fimages%2F2%2F2a%2FFallout2front.jpg&f=1&nofb=1"
              className="w-full h-full"
              alt="fallout-logo"
            />
          </div>
          <div
            className="mainCardBack my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 mt-[-420px] overflow-hidden shadow-lg shadow-gray-400"
            style={darkMode ? stylesSwitch.dark.card : stylesSwitch.light.basic}
          >
            <div className="text-center flex flex-col items-center h-full text-gray-800 px-2 pb-24 ">
              <h1 className="my-4 text-3xl font-semibold self-center">
                {myData && myData.chartName}
              </h1>
              {myData && <Table data={myData} />}
              <button className="bg-teal-500 px-6 py-2 mt-[8rem] mb-8 font-semibold text-white rounded-full delay-500 duration-1000 scale-0 group-hover:scale-125">
                Last update:
              </button>
              <h1 className="text-sm font-semibold ">
                {myData && myData.time.updated}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/*
         <div class="flex w-full h-full items-center justify-center flex-wrap">
        <div class="w-full md:w-1/2 xl:w-1/3 border-4 border-red-500 h-8"></div>
        <div class="w-full md:w-1/2 xl:w-1/3 border-4 border-red-500 h-8"></div>
        <div class="w-full md:w-1/2 xl:w-1/3 border-4 border-red-500 h-8"></div>
      </div>
       */}
    </section>
  );
};

export default Main;
