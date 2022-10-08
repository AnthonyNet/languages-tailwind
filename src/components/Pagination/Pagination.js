import React, { useState } from "react";
import { useEffect } from "react";

import dataOxfordB1 from "../data/json/OxfordB1";
import dataOxfordB2 from "../data/json/OxfordB2";
import dataOxfordC1 from "../data/json/OxfordC1";

import Goethe from "../data/json/Goethe";
import OxfordB2 from "../data/json/OxfordB2";

const Pagination = ({ dataJSON }) => {
  //add id to all myData items
  useEffect(() => {
    myData.forEach((item, index) => {
      item.id = index + 1;
    });
  });

  const [myData, setMyData] = useState(dataOxfordB1);
  const [currentPage, setCurrentPage] = useState(1);
  const [wordsPerPage, setPostsPerPage] = useState(25);
  const [menuPosts, setMenuPosts] = useState();

  const [marginLeft, setMarginLeft] = useState(0);

  //  25                    1             25
  const lastWordIndex = currentPage * wordsPerPage;
  //      0              25                 25
  const firstWordIndex = lastWordIndex - wordsPerPage;
  //                                0                  25
  const currentPosts = myData.slice(firstWordIndex, lastWordIndex);

  let pages = [];

  for (let i = 1; i <= Math.ceil(myData.length / wordsPerPage); i++) {
    pages.push(i);
  }

  const style = {
    display: currentPage < currentPage - 1 ? "none" : "",
  };

  const dataMenuStyle = {
    borderBottom: "border-b-4 border-red-600",
  };

  const prevPage = () => {
    if (currentPage < 2) {
      setCurrentPage(pages.length);
     
    } else {
      setCurrentPage((page) => page - 1);
    }
  };

  const nextPage = () => {
    if (currentPage > pages.length - 1) {
      setCurrentPage(1);
      
    } else {
      setCurrentPage((page) => page + 1);
    }
  };

  const [myNumb, setMyNumb] = useState(0);

  useEffect(() => {
    if (myNumb == 0) {
      setMyData(dataOxfordB1);
    } else if (myNumb == 1) {
      setMyData(dataOxfordB2);
    } else if (myNumb == 2) {
      setMyData(dataOxfordC1);
    } else {
      setMyData(Goethe);
    }
  }, [myNumb]);


  return (
    <section className="min-h-screen flex flex-column justify-center items-baseline flex-wrap">
      <nav className=" w-full h-auto border-4">
        <ul className="flex flex-row justify-around w-[50%] m-auto">
          <li
            className={myNumb === 0 ? dataMenuStyle.borderBottom : null}
            onClick={() => setMyNumb(0)}
          >
            Oxford B1
          </li>
          <li
            className={myNumb === 1 ? dataMenuStyle.borderBottom : null}
            onClick={() => setMyNumb(1)}
          >
            Oxford B2
          </li>
          <li
            className={myNumb === 2 ? dataMenuStyle.borderBottom : null}
            onClick={() => setMyNumb(2)}
          >
            Oxford C1
          </li>
          <li
            className={myNumb === 3 ? dataMenuStyle.borderBottom : null}
            onClick={() => setMyNumb(3)}
          >
            Goethe De
          </li>
        </ul>
      </nav>

      <main className="w-full">
        <h1 className="text-center">Pagination</h1>
        <h3 className="text-center">No responsive</h3>
        <table className="table-fixed min-w-[50vw] m-auto">
          <thead>
            <tr className="flex justify-around">
              <th>CZ</th>
              <th>ENG</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="border-b-2 border-red-300 flex  flex-nowrap"
                >
                  <td className="w-[50%] border-red-400 border-r-4">
                    {item.czWord}
                  </td>
                  {item.sentenceTranslated ? (
                    <td className="w-[50%] text-right">
                      {item.sentenceTranslated}
                    </td>
                  ) : (
                    <td className="w-[50%] text-right">
                      {item.wordTranslated}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>

      <article className="flex flex-row  w-auto  justify-center">
        <ul className="flex flex-row  items-center justify-center border-4">

          {/* 
          PREVIOUS PAGE BUTTON
          */}

          <li className="sm:w-[50px] px-4 -mb-2" onClick={prevPage}>
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="arrow-alt-circle-left"
                className="w-7 h-7"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"
                ></path>
              </svg>
            </div>
          </li>

            {/* 
             PAGINATION MENU
          */}

          {pages.map((page, index) => {
            return (
              <li
                className={
                  page == currentPage
                    ? "text-xl border-b border-red-400  sm:w-[50px] text-center mt-2 h-[50px]"
                    : page < currentPage - 3
                    ? "hidden"
                    : // : page > currentPage + 4 && currentPage !=1 ? "hidden"
                    page > currentPage + 3 && page > 7
                    ? "hidden"
                    : "sm:w-[50px] sm:h-[50px] p-[2vw] sm:p-4 visible"
                }
                style={style}
                key={index}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </li>
            );
          })}

          {/* 
          NEXT PAGE BUTTON
          */}

          <li onClick={nextPage} className="sm:w-[50px] p-4 -mb-2">
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="arrow-alt-circle-right"
                className="w-7 h-7"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
                ></path>
              </svg>{" "}
            </div>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Pagination;
