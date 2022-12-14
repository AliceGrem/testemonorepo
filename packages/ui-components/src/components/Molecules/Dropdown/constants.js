import { colors, fonts } from '@monorepo/theme';
import { R, SIZES_FORM_CONTROL } from '@monorepo/utils';
import PropTypes from 'prop-types';

export const CHEVRON_UP = 'chevron_cima';
export const CHEVRON_DOWN = 'chevron_baixo';
export const CLASS_NAME_PREFIX = 'dropdown';

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
  name: PropTypes.string,
  placeholder: PropTypes.string,
  colorIcon: PropTypes.string,
  isMultiple: PropTypes.bool,
  isEnabled: PropTypes.bool,
  isLocked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isError: PropTypes.bool,
  setIsError: PropTypes.func,
  options: PropTypes.array,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  isSearchable: PropTypes.bool,
  fontSize: PropTypes.oneOf(R.keys(fonts.sizes)),
  size: PropTypes.oneOf(R.keys(SIZES_FORM_CONTROL)),
  value: PropTypes.object,
  helper: PropTypes.string,
  helperIcon: PropTypes.string,
};

export const defaultProps = {
  isMultiple: false,
  isSearchable: false,
  colorIcon: colors.Icon.enabled,
  options: [],
  size: R.head(R.keys(SIZES_FORM_CONTROL)),
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  placeholder: '',
  value: { label: '', value: '' },
  noOptionsMessage: () => 'Sem opções correspondentes',
  loadingMessage: () => 'Buscando opções correspondentes',
  helper: '',
  helperIcon: 'info',
};
