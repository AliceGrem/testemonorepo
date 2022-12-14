import React from 'react';

import { Icon, ICON_SIZES } from '~Atoms';

import { BUTTON_SIZES, BUTTON_TYPES, defaultProps, propTypes } from './constants';
import StyledButton from './style';

const Button = ({ children, onClick, onMouseOver, onMouseLeave, loading, ...props }) => (
  <StyledButton {...props} onClick={onClick} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
    {(!loading && children) || <Icon name="loading" spin size={ICON_SIZES.sm} />}
  </StyledButton>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export { BUTTON_SIZES, BUTTON_TYPES };
export default Button;
