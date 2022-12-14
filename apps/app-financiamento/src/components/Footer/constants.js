import { PropTypes } from '@monorepo/ui-components';

export const propTypes = {
  formik: PropTypes.object,
  terms: PropTypes.object,
  next: PropTypes.string,
  back: PropTypes.string,
  details: PropTypes.bool,
  hideActions: PropTypes.bool,
  form: PropTypes.object,
  onNext: PropTypes.func,
};

export const defaultProps = {
  formik: [],
  terms: {
    href: '',
    text: '',
  },
  next: '',
  back: '',
  details: false,
  hideActions: false,
};
