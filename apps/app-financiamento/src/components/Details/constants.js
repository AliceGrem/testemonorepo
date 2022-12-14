import { PropTypes } from '@monorepo/ui-components';

export const propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  onClick: () => null,
};

export const defaultProps = {
  text: '',
  icon: '',
  onClick: PropTypes.func,
};
