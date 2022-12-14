import PropTypes from 'prop-types';

export const propTypes = {
  maker: PropTypes.string,
  width: PropTypes.string,
  heigth: PropTypes.string,
};

export const defaultProps = {
  maker: '',
};

export const MAKER_BY_NAME = {
  renault: 'Renault',
  ferrari: 'Ferrari',
};
