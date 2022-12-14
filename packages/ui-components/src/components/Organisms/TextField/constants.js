import { fonts } from '@monorepo/theme';
import { R, SIZES_FORM_CONTROL } from '@monorepo/utils';
import PropTypes from 'prop-types';

export const ICON_SIZES = {
  small: 'xs',
  medium: 'sm',
  large: 'md',
};

export const propTypes = {
  renderInput: PropTypes.func,
  iconName: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLocked: PropTypes.bool,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(R.keys(SIZES_FORM_CONTROL)),
  helperTextSize: PropTypes.oneOf(R.keys(fonts.sizes)),
};

export const defaultProps = {
  onChange: () => {},
  helperTextSize: 'font3xs',
};
