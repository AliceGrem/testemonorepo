import React from 'react';

import { propTypes } from './constants';
import StyledLabel from './style';

const Label = ({ children, size, ...props }) => (
  <StyledLabel size={size} {...props}>
    {children}
  </StyledLabel>
);

Label.propTypes = propTypes;

export default Label;
