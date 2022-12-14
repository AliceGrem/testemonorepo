import PropTypes from 'prop-types';

export const CLEAR_BUTTON_TYPE = 'default';
export const CLEAR_BUTTON_ICON = 'fechar';

export const ICON_SIZES = {
  small: 'xs',
  medium: 'sm',
  large: 'md',
};

export const propTypes = {
  onClear: PropTypes.func,
  isError: PropTypes.bool,
};
