import React, { useState, useEffect } from 'react';

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? '#333' : '#FFF';
    document.body.style.color = isDarkMode ? '#FFF' : '#000';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Hellen Modus aktivieren' : 'Dunkelmodus aktivieren'}
    </button>
  );
};
