import { PropTypes } from '@monorepo/ui-components';

export const propTypes = {
  progress: PropTypes.number,
  error: PropTypes.bool,
};

export const defaultProps = {
  progress: 0,
  error: false,
};
