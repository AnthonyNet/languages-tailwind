import React, { createContext, useState } from "react";
import { FaRegBell } from "react-icons/fa";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const stylesSwitch = {
    light: {
      basic: {
        backgroundColor: "white",
        transitionTimingFunction: "ease-in",
        transition: "1s",
      },
    },
    dark: {
      basic: {
        backgroundColor: "black",
        transitionTimingFunction: "ease-in",
        transition: "2s",
      },
      slate: {
        backgroundColor: "#0f172a",
        transitionTimingFunction: "ease-in",
        transition: "2s",
        font: {
          color: "#2274cc"
        }
      },
      card:{
        backgroundColor: "rgb(7, 7, 26)"
      },
      exerciseCards:{
        color: "rgb(56 189 248)",
        backgroundColor: "rgb(15 23 42)",
        transitionTimingFunction: "ease-in",
        transition: "2s",
       
      },
      responsiveMenu: {
        color: "rgb(56 189 248)",
        backgroundColor: "rgb(15 23 42)",
      }
    },
    transparent:{
      backgroundColor: "transparent",
      transitionTimingFunction: "ease-out",
      transition: "2s",
    }
  };
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, stylesSwitch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
