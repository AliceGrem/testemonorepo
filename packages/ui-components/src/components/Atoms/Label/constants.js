import { fonts } from '@monorepo/theme';
import { R } from '@monorepo/utils';
import PropTypes from 'prop-types';

export const propTypes = {
  size: PropTypes.oneOf(R.keys(fonts.sizes)),
  color: PropTypes.string,
  children: PropTypes.node,
  textAlign: PropTypes.string,
};
