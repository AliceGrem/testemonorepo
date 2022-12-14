import { PropTypes } from '@monorepo/ui-components';

export const propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
};

export const defaultProps = {
  label: '',
  icon: '',
  active: false,
};
