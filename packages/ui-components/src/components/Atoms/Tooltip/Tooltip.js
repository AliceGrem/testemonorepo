import React from 'react';

import { defaultProps,propTypes } from './constants';
import { StyledTooltip } from './style';

const Tooltip = ({ children }) => <StyledTooltip>{children}</StyledTooltip>;

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
