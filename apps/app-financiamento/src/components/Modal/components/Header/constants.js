import { PropTypes } from '@monorepo/ui-components';

export const propTypes = {
  modalType: PropTypes.string,
  onClose: PropTypes.func,
};

export const defaultProps = {
  modalType: 'success',
  onClose: () => {},
};
