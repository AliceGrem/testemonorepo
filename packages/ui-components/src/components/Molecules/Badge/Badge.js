import React from 'react';

import { Icon } from '~Atoms';

import { defaultProps,propTypes } from './constants';
import StyledBadge from './style';

const Badge = ({ colorIcon, fillIcon, ...props }) => (
  <StyledBadge {...props}>
    <Icon stroke={colorIcon} fill={fillIcon && colorIcon} {...props} />
  </StyledBadge>
);

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;

export default Badge;
