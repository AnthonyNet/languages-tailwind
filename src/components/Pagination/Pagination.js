import React, { useState } from "react";
import { useEffect } from "react";





const Pagination = ({ dataJSON }) => {
  
  const [myData, setMyData] = useState(dataJSON);
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage, setPostsPerPage] = useState(25);
  const [menuPosts, setMenuPosts] = useState();

  const [marginLeft, setMarginLeft] = useState(0);

          //  20            1             20
  const lastWordIndex = currentPage * wordsPerPage;
        //      0              20           20
  const firstWordIndex = lastWordIndex - wordsPerPage; console.log(firstWordIndex); 
        //                                0               20
  const currentPosts = myData.slice(firstWordIndex, lastWordIndex);

let pages = [];


  for (let i = 1; i <= Math.ceil(myData.length / wordsPerPage); i++) {
    pages.push(i);
}


  return (
    <>
      <article>
        <h1 className="text-center">Pagination</h1>
        <table className="table-fixed w-auto m-auto">
        <thead>
          <tr>
          <th>CZ</th>
          <th>ENG</th>  
          </tr>
        </thead>
        <tbody>

          {currentPosts.map((item, index)=>{
            return (
              <tr key={index} className="border-b-2 border-red-300">
                <td>{item.czWord}</td>
                <td className="text-right">{item.wordTranslated}</td>
              </tr>
             
            )
          })}
          </tbody>
        </table>
      </article>

      <article className="flex flex-row  w-auto m-auto">
    
        <ul className="flex flex-row  m-auto  border-4">
        <li 
      className="p-4"
      onClick={()=>setMarginLeft(marginLeft - 575)}
      >//</li>
          {pages.map((page, index)=>{
             return (
              <li 
              
              className={page==currentPage?'bg-cyan-300 p-4': 'p-4'}
               key={index}
               onClick={()=> setCurrentPage(page)}>{page}
              </li>
             )
          })}
          <li className="p-4">//</li>
        </ul>
     
      </article>
  
    </>
  );
};

export default Pagination;
