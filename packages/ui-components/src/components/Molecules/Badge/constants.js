import { colors, spacings } from '@monorepo/theme';
import { R } from '@monorepo/utils';
import PropTypes from 'prop-types';

export const SIZES = {
  xs: spacings.layout.spacing2xs,
  sm: spacings.layout.spacingXs,
  md: spacings.layout.spacingSm,
  lg: spacings.layout.spacingMd,
  xl: spacings.layout.spacing2xl,
  xxl: spacings.layout.spacing3xl,
};

export const propTypes = {
  colorIcon: PropTypes.string,
  colorBorder: PropTypes.string,
  colorBackground: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(R.keys(SIZES)),
  title: PropTypes.string,
};

export const defaultProps = {
  colorBorder: colors.Badge.enabled,
  colorBackground: colors.transparent,
  size: R.head(R.keys(SIZES)),
};
