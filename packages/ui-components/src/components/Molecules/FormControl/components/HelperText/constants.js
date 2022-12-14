import { fonts } from '@monorepo/theme';
import { R } from '@monorepo/utils';
import PropTypes from 'prop-types';

export const propTypes = {
  text: PropTypes.string,
  size: PropTypes.oneOf(R.keys(fonts.sizes)),
};

export const defaultProps = {
  size: 'font3xs',
};
