import React, { createContext, useContext } from 'react';

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  // Simplified provider with no darkMode tracking
  return (
    <NavbarContext.Provider value={{ darkMode: false }}>
      {children}
    </NavbarContext.Provider>
  );
};