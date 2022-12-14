import React from 'react';

import { defaultProps,propTypes } from './constants';
import StyledCard from './style';

const Card = ({ children, ...props }) => <StyledCard {...props}>{children}</StyledCard>;

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
