import React from 'react';

import { propTypes } from './constants';

export const apiCtx = React.createContext();

export const useApi = () => React.useContext(apiCtx);

export const ApiProvider = ({ children, api, token }) => (
  <apiCtx.Provider value={{ api, token }}>{children}</apiCtx.Provider>
);

ApiProvider.propTypes = propTypes;

export default ApiProvider;
