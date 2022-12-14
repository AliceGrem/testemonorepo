import { R, SIZES_FORM_CONTROL } from '@monorepo/utils';
import PropTypes from 'prop-types';

export const ICON_SIZES = {
  small: 'xs',
  medium: 'sm',
  large: 'md',
};

const DEFAULT_MAX_CHAR = '500';
const DEFAULT_NUM_ROWS = '5';

export const propTypes = {
  name: PropTypes.string,
  maxChar: PropTypes.string,
  numRows: PropTypes.string,
  isDisabled: PropTypes.bool,
  id: PropTypes.string,
  readonly: PropTypes.bool,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(R.keys(SIZES_FORM_CONTROL)),
};

export const defaultProps = {
  maxChar: DEFAULT_MAX_CHAR,
  numRows: DEFAULT_NUM_ROWS,
  isDisabled: false,
  readonly: false,
  hasClearButton: false,
  textInfo: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onClick: () => {},
};
