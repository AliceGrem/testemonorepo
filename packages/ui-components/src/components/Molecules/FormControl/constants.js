import { fonts } from '@monorepo/theme';
import { R, SIZES_FORM_CONTROL } from '@monorepo/utils';
import PropTypes from 'prop-types';

export const LABEL_SIZES = {
  small: 'font2xs',
  medium: 'fontXs',
  large: 'fontSm',
};

export const propTypes = {
  render: PropTypes.func,
  textLabel: PropTypes.string,
  textError: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLocked: PropTypes.bool,
  size: PropTypes.oneOf(R.keys(SIZES_FORM_CONTROL)),
  helperTextSize: PropTypes.oneOf(R.keys(fonts.sizes)),
};

export const defaultProps = {
  size: R.head(R.keys(SIZES_FORM_CONTROL)),
  helperTextSize: 'font3xs',
};
