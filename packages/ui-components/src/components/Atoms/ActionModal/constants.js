import PropTypes from 'prop-types';

export const propTypes = {
  title: PropTypes.string,
  iconName: PropTypes.string,
  cancelText: PropTypes.string,
  children: PropTypes.any,
  hasCancel: PropTypes.bool,
};

export const defaultProps = {
  title: '',
  children: '',
  cancelText: 'Cancelar',
  hasCancel: true,
};
