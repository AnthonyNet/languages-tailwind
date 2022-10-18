import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const stylesSwitch = {
    light: {
      basic: {
        backgroundColor: "white",
        transitionTimingFunction: "ease-in",
        transition: "2s",
      },
    },
    dark: {
      basic: {
        backgroundColor: "black",
        transitionTimingFunction: "ease-in",
        transition: "12",
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
        basic:{
          backgroundColor: "red"
        }
      }
    },
    transparent:{
      backgroundColor: "transparent",
      transitionTimingFunction: "ease-in",
      transition: "2s",
    }
  };
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, stylesSwitch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
