import { R } from '@monorepo/utils';
import PropTypes from 'prop-types';

export const PARTIAL_ICON = 'menos';
export const CHECKED_ICON = 'check';
export const CHECKBOX_TYPE = 'checkbox';

export const LABEL_SIZES = {
  small: 'font2xs',
  medium: 'fontXs',
  large: 'fontSm',
};

export const CHECKBOX_SIZES = {
  small: 'xs',
  medium: 'sm',
  large: 'md',
};

export const propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.oneOf(R.keys(CHECKBOX_SIZES)),
  isError: PropTypes.bool,
  isEnabled: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isPartial: PropTypes.bool,
  isPartialDisabled: PropTypes.bool,
  isCheckedDisabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  initialState: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

export const defaultProps = {
  size: R.head(R.keys(CHECKBOX_SIZES)),
  isEnabled: false,
  isError: false,
  isDisabled: false,
  isPartial: false,
  isPartialDisabled: false,
  isCheckedDisabled: false,
  autoFocus: false,
  initialState: false,
  onChange: () => { },
  onFocus: () => { },
};
