import {
  Input,
  React,
  TextField,
  useEffect,
  useFormik,
  useNavigate,
} from '@monorepo/ui-components';
import { configFormikInput, defineErrors, handleInputChange, MASKS } from '@monorepo/utils';

import { Footer } from '../../../components';
import { useWizard } from '../../../components/Wizard/components/WizardProvider/WizardProvider';
import PageTemplate from '../../../templates/PageTemplate';
import { FIELD_SIZE, HELPER_TEXT_SIZE, NEXT, propTypes, TERMS, TITLE } from './constants';
import { form } from './utils';

const PersonalData = ({ initialValues }) => {
  const { setStepData, setStepError, data } = useWizard();
  const navigate = useNavigate();

  const formik = useFormik({
    ...form({ ...initialValues, ...data }),
    onSubmit: values => {
      try {
        setStepData({ ...values });
        navigate(NEXT);
      } catch (error) {
        console.error('error', error);
      }
    },
    validateOnMount: true,
  });

  useEffect(() => {
    setStepError(formik.errors);
  }, [formik.errors]);

  const defaultInput = () => (
    <Input
      size={FIELD_SIZE}
      {...configFormikInput('email', formik, { customChange: handleInputChange(formik) })}
    />
  );
  const maskedInput = () => (
    <Input
      size={FIELD_SIZE}
      {...configFormikInput('cpf', formik, { customChange: handleInputChange(formik) })}
      mask={MASKS.cpf}
    />
  );

  return (
    <PageTemplate title={TITLE}>
      <>
        <TextField
          textLabel="CPF"
          renderInput={maskedInput}
          {...defineErrors('cpf', formik)}
          size={FIELD_SIZE}
          helperTextSize={HELPER_TEXT_SIZE}
        />
        <TextField
          {...defineErrors('email', formik)}
          textLabel="E-mail"
          renderInput={defaultInput}
          size={FIELD_SIZE}
          helperTextSize={HELPER_TEXT_SIZE}
        />
        <Footer onNext={formik.handleSubmit} terms={TERMS} next={NEXT} />
      </>
    </PageTemplate>
  );
};
PersonalData.propTypes = propTypes;

export default PersonalData;
