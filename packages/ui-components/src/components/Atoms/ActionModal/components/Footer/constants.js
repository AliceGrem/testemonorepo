import PropTypes from 'prop-types';

export const propTypes = {
  mainButtonText: PropTypes.string,
  mainButtonMethod: PropTypes.func,
  secondaryButtonText: PropTypes.string,
  secondaryButtonMethod: PropTypes.func,
  controller: PropTypes.func,
};

export const defaultProps = {
  mainButtonText: undefined,
  mainButtonMethod: () => {},
  secondaryButtonText: undefined,
  secondaryButtonMethod: () => {},
  controller: () => {},
};
