import PropTypes from 'prop-types';

export const propTypes = {
  textCountry: PropTypes.string,
  isDisabled: PropTypes.bool,
  isLocked: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  textInfo: PropTypes.string,
  isError: PropTypes.bool,
  isSuccess: PropTypes.bool,
  setIsError: PropTypes.func,
  setIsSuccess: PropTypes.func,
  validator: PropTypes.func,
};

export const defaultProps = {
  textCountry: '',
  isLocked: false,
  isDisabled: false,
  isError: false,
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onClick: () => {},
};
