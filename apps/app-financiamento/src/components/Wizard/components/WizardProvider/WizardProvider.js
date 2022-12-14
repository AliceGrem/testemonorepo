import React, { createContext, useContext } from 'react';

import { propTypes } from './constants';

export const wizardCtx = createContext();
export const useWizard = () => useContext(wizardCtx);

const WizardProvider = ({ children, api }) => (
  <wizardCtx.Provider value={api}>{children}</wizardCtx.Provider>
);

WizardProvider.propTypes = propTypes;

export default WizardProvider;
