import { buttons } from '@monorepo/theme';
import { R } from '@monorepo/utils';
import PropTypes from 'prop-types';

export const { sizes, types } = buttons;

export const BUTTON_TYPES = R.reduce((acc, val) => ({ ...acc, [val]: val }), {}, R.keys(types));
export const BUTTON_SIZES = R.reduce((acc, val) => ({ ...acc, [val]: val }), {}, R.keys(sizes));

export const propTypes = {
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(R.keys(sizes)),
  type: PropTypes.oneOf(R.keys(types)),
  children: PropTypes.node,
  onClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseLeave: PropTypes.func,
  maxWidth: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

const DEFAULT_SIZE = R.prop('0', R.keys(sizes));
const DEFAULT_TYPE = R.prop('0', R.keys(types));

export const defaultProps = {
  size: DEFAULT_SIZE,
  type: DEFAULT_TYPE,
  onClick: () => {},
  onMouseOver: () => {},
  onMouseLeave: () => {},
  maxWidth: '100%',
  width: '100%',
  disabled: false,
  loading: false,
};
