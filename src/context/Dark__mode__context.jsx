import { useState, useContext, createContext, useEffect } from "react";

const DarkModeContext = createContext();

export function DarkModeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const initialDarkMode = JSON.parse(localStorage.getItem("darkMode"));

    if (initialDarkMode) {
      document.body.classList.add("dark__mode");
      setDarkMode(initialDarkMode);
    } else {
      document.body.classList.remove("dark__mode");
      setDarkMode(initialDarkMode);
    }
  }, []);

  const handleToggle = () => {
    setDarkMode((prev) => !prev);
    changeDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode: handleToggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkModeContext() {
  return useContext(DarkModeContext);
}

function changeDarkMode(darkMode) {
  if (darkMode) {
    localStorage.setItem("darkMode", JSON.stringify(true));
    document.body.classList.add("dark__mode");
  } else {
    localStorage.setItem("darkMode", JSON.stringify(false));
    document.body.classList.remove("dark__mode");
  }
}
