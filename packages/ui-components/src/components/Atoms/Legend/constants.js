import { colors, fonts } from '@monorepo/theme';
import PropTypes from 'prop-types';

export const propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  textAlign: PropTypes.string,
};

export const defaultProps = {
  color: colors.Legend.enabled,
  textAlign: fonts.align.center,
};
