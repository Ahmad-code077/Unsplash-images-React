import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();
const initialPreferScheme = () => {
  const preferDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;
  const storedDarkMode = localStorage.getItem('darkMode');
  console.log(storedDarkMode);
  if (storedDarkMode === null) {
    return preferDarkMode;
  }
  return storedDarkMode === 'true';
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(initialPreferScheme());
  const [searchTerm, setSearchTerm] = useState('cat');
  const themeToggle = () => {
    let newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('darkMode', newTheme);
  };
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
  });
  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        themeToggle,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
