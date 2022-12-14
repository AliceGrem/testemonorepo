import React from 'react';

import { propTypes } from './constants';
import StyledLink from './style';

const Link = ({ href, children, ...props }) => (
  <StyledLink href={href} {...props}>
    {children}
  </StyledLink>
);

Link.propTypes = propTypes;

export default Link;
