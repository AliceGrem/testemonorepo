import { PropTypes } from '@monorepo/ui-components';

export const propTypes = {
  next: PropTypes.string,
  back: PropTypes.string,
  formik: PropTypes.object,
};

export const defaultProps = {
  next: '',
  back: '',
  formik: [],
};

export const DISABLED_BUTTON = 'disabled';
export const PRIMARY_BUTTON = 'primary';
export const SECONDARY_BUTTON = 'secondary';
