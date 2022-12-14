import PropTypes from 'prop-types';

export const propTypes = {
  modalType: PropTypes.string,
  onClose: PropTypes.func,
};

export const defaultProps = {
  modalType: 'success',
  onClose: () => {},
};
