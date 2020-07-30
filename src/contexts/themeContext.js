import React, { useState, createContext, useCallback } from 'react';

export const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  const [preferDark, toggleTheme] = useState(() => {
    return JSON.parse(localStorage.getItem('preferDark')); // localStorage return a string not boolean
  });

  const toggleThemeHandler = useCallback(() => {
    toggleTheme(prevState => {
      const nextState = !prevState;
      localStorage.setItem('preferDark', nextState);
      return nextState;
    });
  }, []);

  return <ThemeContext.Provider value={{ preferDark, toggleThemeHandler }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
