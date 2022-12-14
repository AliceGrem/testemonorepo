import PropTypes from 'prop-types';

export const TEXT_DIVIDER = 'ou';

export const propTypes = {
  Label: PropTypes.node,
  hasTextDivider: PropTypes.bool,
  Figure: PropTypes.node,
};

export const defaultProps = {
  hasTextDivider: false,
};
