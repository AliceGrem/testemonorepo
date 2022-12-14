import { PropTypes } from '@monorepo/ui-components';

export const ERROR_ZIPCODE_RETURN = 'Não conseguimos localizar seu CEP';

export const defaultPropTypes = {
  label: '',
};

export const propTypes = {
  label: PropTypes.string,
  formik: PropTypes.object.isRequired,
  cepLabel: PropTypes.string.isRequired,
};
