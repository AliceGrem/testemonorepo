import { colors, fonts } from '@monorepo/theme';
import PropTypes from 'prop-types';

export const propTypes = {
  colorTitle: PropTypes.string,
  textTitle: PropTypes.string,
  colorSubTitle: PropTypes.string,
  textSubTitle: PropTypes.string,
  textAlign: PropTypes.string,
};

export const defaultProps = {
  colorTitle: colors.Subtitle.default,
  textTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  textAlign: fonts.align.center,
  colorSubTitle: colors.Legend.default,
};
