import { colors } from '@monorepo/theme';
import { R } from '@monorepo/utils';
import PropTypes from 'prop-types';

export const SIZES = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
};

export const DEFAULT_ICON_SIZE = R.head(R.keys(SIZES));

export const propTypes = {
  children: PropTypes.element,
  iconName: PropTypes.string,
  iconSize: PropTypes.oneOf(R.keys(SIZES)),
  iconStroke: PropTypes.string,
  onClose: PropTypes.func,
  closeSize: PropTypes.oneOf(R.keys(SIZES)),
  closeStroke: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export const defaultProps = {
  iconName: 'info',
  iconSize: 'sm',
  iconStroke: colors.neutral.colorWhite,
  onClose: () => {},
  closeSize: 'sm',
  closeStroke: colors.neutral.colorWhite,
  backgroundColor: colors.neutral.colorDark,
};
