import React, { useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

import data from "../data/json/IrregularVerbs";

const SearchIrregular = () => {
  const [search, setSearch] = useState("");
  const { darkMode, stylesSwitch } = useContext(ThemeContext);

  return (
    <>
      <div
        className="w-full min-h-[90vh]"
        style={darkMode ? stylesSwitch.dark.exerciseCards : stylesSwitch.light.basic}
      >
        <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Hledej slovo"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>

        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white p-2 sm:p-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white p-2 sm:p-4"
                      >
                        CZ
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white p-2 sm:p-4"
                      >
                        ENG
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white p-2 sm:p-4"
                      >
                        Past Simple
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white p-2 sm:p-4"
                      >
                        Past Perfect
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-green">
                    {data
                      .filter((item) => {
                        return search.toLowerCase() === ""
                          ? item
                          : item.cz.toLowerCase().startsWith(search) ||
                              item.base.toLowerCase().startsWith(search) ||
                              item.pastSimple
                                .toLowerCase()
                                .startsWith(search) ||
                              item.pastParticiple
                                .toLowerCase()
                                .startsWith(search);
                      })
                      .map((item, index) => (
                        <tr key={index} className="border-b-2 border-blue-200">
                          <th
                            scope="col"
                            className="text-sm font-medium  p-2 sm:p-4"
                          >
                            {index + 1}
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium  p-2 sm:p-4"
                          >
                            {item.cz}
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium  p-2 sm:p-4"
                          >
                            {item.base}
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium  p-2 sm:p-4"
                          >
                            {item.pastSimple}
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium p-2 sm:p-4"
                          >
                            {item.pastParticiple}
                          </th>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchIrregular;
