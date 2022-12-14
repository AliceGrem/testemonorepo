import PropTypes from 'prop-types';

export const propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  state: PropTypes.array,
  compActions: PropTypes.node,
};

export const defaultProps = {
  title: '',
  children: '',
  state: [],
};
