import { fonts } from '@monorepo/theme';
import { R, SIZES_FORM_CONTROL } from '@monorepo/utils';
import PropTypes from 'prop-types';

export const successIcon = 'check';
export const errorIcon = 'fechar';

const DEFAULT_PATTERN = /.?/;
const DEFAULT_TYPE = 'text';

export const TEXT_SIZES = {
  small: 'font2xs',
  medium: 'fontXs',
  large: 'fontSm',
};

export const ICON_SIZES = {
  small: 'xs',
  medium: 'sm',
  large: 'md',
};

export const propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.instanceOf(RegExp),
  isDisabled: PropTypes.bool,
  isLicencePlate: PropTypes.bool,
  isLocked: PropTypes.bool,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  mask: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(RegExp)])),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  fontSize: PropTypes.oneOf(R.keys(fonts.sizes)),
  hasClearButton: PropTypes.bool,
  textInfo: PropTypes.string,
  isError: PropTypes.bool,
  isSuccess: PropTypes.bool,
  setIsSuccess: PropTypes.func,
  validator: PropTypes.func,
  size: PropTypes.oneOf(R.keys(SIZES_FORM_CONTROL)),
};

export const defaultProps = {
  textTooltipInfo: '',
  type: DEFAULT_TYPE,
  pattern: DEFAULT_PATTERN,
  isLocked: false,
  isDisabled: false,
  isLicencePlate: false,
  hasClearButton: false,
  textInfo: '',
  size: R.head(R.keys(SIZES_FORM_CONTROL)),
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onClick: () => {},
};
