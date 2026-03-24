import React, { createContext, useContext, useState } from 'react';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [mode, setMode] = useState(() => localStorage.getItem('portfolioMode') || null);

  const selectMode = (newMode) => {
    localStorage.setItem('portfolioMode', newMode);
    setMode(newMode);
  };

  return (
    <PortfolioContext.Provider value={{ mode, selectMode }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);