import React, { createContext, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const stylesSwitch = {
    light: {
      basic: {
        backgroundColor: "white",

        transition: "1s ease-in",
      },
    },
    dark: {
      basic: {
        backgroundColor: "black",
        transition: "2s ease-in",
      },
      slate: {
        backgroundColor: "#0f172a",
        color: "#2274cc",
        transition: "2s ease-in",
       
      },
      card: {
        backgroundColor: "rgb(7, 7, 26)",
      },
      exerciseCards: {
        color: "rgb(56 189 248)",
        backgroundColor: "rgb(15 23 42)",

        transition: "2s ease-in",
      },
      responsiveMenu: {
        color: "rgb(56 189 248)",
        backgroundColor: "rgb(15 23 42)",
      },
    },
    transparent: {
      backgroundColor: "transparent",

      transition: "2s ease-in",
    },
  };
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, stylesSwitch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
