import React, { createContext, ReactNode, useContext, useState } from 'react';

interface MainContextType {
  showFooter: boolean;
  toggleFooterStatus: (showFooter: boolean) => void;
}

const MainContext = createContext<MainContextType | undefined>(undefined);

const MainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showFooter, setShowFooter] = useState(true);

  const toggleFooterStatus = (value: boolean) => {
    setShowFooter(value);
  };

  return (
    <MainContext.Provider value={{ showFooter, toggleFooterStatus }}>
      {children}
    </MainContext.Provider>
  );
};

const useFooter = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { MainProvider, useFooter };
