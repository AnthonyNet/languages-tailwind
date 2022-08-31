import React, { useState } from "react";



import data from "../data/json/IrregularVerbs";



const SearchIrregular = () => {
    const [search, setSearch] = useState('');


  return (
    <>
      <div className="w-full">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
           
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Hledej slovo"
              onChange = {(e)=>setSearch(e.target.value)}
            />
          </div>
        </form>

        <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-center">
          <thead className="border-b bg-gray-800">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                CZ
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                ENG
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Past Simple
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                Past Perfect
              </th>
            </tr>
          </thead>
          <tbody>


          {data
          .filter((item) => {
            return search.toLowerCase() === ''
            ? item 
            : item.cz.toLowerCase().startsWith(search)
              || item.base.toLowerCase().startsWith(search)
              || item.pastSimple.toLowerCase().startsWith(search)
              || item.pastParticiple.toLowerCase().startsWith(search);
              ;
          }).map((item, index)=>(
            <tr key={index}>
              <th scope="col" className="text-sm font-medium text-black px-6 py-4">
                {index + 1}
              </th>
              <th scope="col" className="text-sm font-medium text-black px-6 py-4">
                {item.cz}
              </th>
              <th scope="col" className="text-sm font-medium text-black px-6 py-4">
                {item.base}
              </th>
              <th scope="col" className="text-sm font-medium text-black px-6 py-4">
                {item.pastSimple}
              </th>
              <th scope="col" className="text-sm font-medium text-black px-6 py-4">
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
