import { colors, fonts } from '@monorepo/theme';
import PropTypes from 'prop-types';

export const propTypes = {
  color: PropTypes.string,
  children: PropTypes.string,
  textAlign: PropTypes.string,
};

export const defaultProps = {
  children: '',
  color: colors.Subtitle.default,
  textAlign: fonts.align.left,
};
