import React from 'react';

import { defaultProps,propTypes } from './constants';
import StyledGridCarmaker from './style';

const GridCarmaker = ({ maxWidth, children }) => (
  <StyledGridCarmaker maxWidth={maxWidth}>{children}</StyledGridCarmaker>
);

GridCarmaker.propTypes = propTypes;
GridCarmaker.defaultProps = defaultProps;

export default GridCarmaker;
