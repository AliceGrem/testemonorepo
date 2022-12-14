import React from 'react';

import { defaultProps,propTypes } from './constants';
import StyledSubtitle from './style';

const Subtitle = ({ children, ...props }) => <StyledSubtitle {...props}>{children}</StyledSubtitle>;

Subtitle.propTypes = propTypes;
Subtitle.defaultProps = defaultProps;

export default Subtitle;
