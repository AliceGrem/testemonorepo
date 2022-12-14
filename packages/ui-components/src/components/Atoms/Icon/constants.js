import { colors } from '@monorepo/theme';
import { R } from '@monorepo/utils';
import PropTypes from 'prop-types';

export const ICON_SIZES = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
};

export const DEFAULT_ICON_SIZE = R.head(R.keys(ICON_SIZES));

export const propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf(R.keys(ICON_SIZES)),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fill: PropTypes.string,
  title: PropTypes.string,
  isDisabled: PropTypes.bool,
  hoverColor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  viewboxheight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  viewboxwidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  spin: PropTypes.bool,
};

export const defaultProps = {
  title: '',
  isDisabled: false,
  stroke: colors.Icon.enabled,
  strokeWidth: 2,
  fill: colors.transparent,
  size: DEFAULT_ICON_SIZE,
  viewboxheight: DEFAULT_ICON_SIZE,
  viewboxwidth: DEFAULT_ICON_SIZE,
  spin: false,
  speed: 2,
};
