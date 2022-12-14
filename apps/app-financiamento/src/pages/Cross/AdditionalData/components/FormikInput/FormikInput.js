import { Input, React } from '@monorepo/ui-components';
import { configFormikInput, handleInputChange } from '@monorepo/utils';

import { defaultProps, propTypes } from './constants';

const FormikInput = ({ name, mask, dataCy, formik }) => (
  <Input
    size="medium"
    data-cy={dataCy || name}
    {...configFormikInput(name, formik, { customChange: handleInputChange(formik) })}
    mask={mask || ''}
  />
);

FormikInput.defaultProps = defaultProps;
FormikInput.propTypes = propTypes;

export default FormikInput;
