import React from 'react';

import { defaultProps,propTypes } from './constants';
import StyledLegalTerms from './style';

const LegalTerms = ({ children, ...props }) => (
  <StyledLegalTerms {...props}>{children}</StyledLegalTerms>
);

LegalTerms.propTypes = propTypes;
LegalTerms.defaultProps = defaultProps;

export default LegalTerms;
