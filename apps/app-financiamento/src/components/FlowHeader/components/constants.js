import { PropTypes } from '@monorepo/ui-components';

export const propTypes = {
  children: PropTypes.element,
  progress: PropTypes.string,
};

export const defaultProps = {
  progress: '0%',
};
