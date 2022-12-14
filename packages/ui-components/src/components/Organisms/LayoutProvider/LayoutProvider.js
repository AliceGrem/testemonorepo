import React from 'react';

export const LayoutCtx = React.createContext();

export const useLayout = () => React.useContext(LayoutCtx);

export const LayoutProvider = ({ children, value }) => (
  <LayoutCtx.Provider value={value}>{children}</LayoutCtx.Provider>
);
