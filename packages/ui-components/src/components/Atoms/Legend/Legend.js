import React from 'react';

import { defaultProps, propTypes } from './constants';
import StyledLegend from './style';

const Legend = ({ children, ...props }) => <StyledLegend {...props}>{children}</StyledLegend>;

Legend.propTypes = propTypes;
Legend.defaultProps = defaultProps;

export default Legend;
