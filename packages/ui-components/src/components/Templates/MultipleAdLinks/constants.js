import PropTypes from 'prop-types';

export const propTypes = {
  adLinkList: PropTypes.arrayOf(
    PropTypes.shape({
      figure: PropTypes.node,
      label: PropTypes.node,
    })
  ),
};
