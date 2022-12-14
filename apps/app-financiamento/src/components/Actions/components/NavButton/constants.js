import { PropTypes } from '@monorepo/ui-components';

export const propTypes = {
  path: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  hasError: PropTypes.bool,
  onNext: PropTypes.func,
};

export const defaultProps = {
  path: '',
  text: '',
  children: '',
  type: 'primary',
  size: 'medium',
  hasError: false,
};
