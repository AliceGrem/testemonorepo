import {
  Input,
  React,
  TextField,
  useEffect,
  useFormik,
  useNavigate,
  useSearchParams,
} from '@monorepo/ui-components';
import {
  configFormikInput,
  defineErrors,
  handleInputChange,
  isDataValid,
  MASKS,
} from '@monorepo/utils';

import { Footer } from '../../../components';
import { useWizard } from '../../../components/Wizard/components/WizardProvider/WizardProvider';
import PageTemplate from '../../../templates/PageTemplate';
import { FIELD_SIZE, HELPER_TEXT_SIZE, NEXT, propTypes, SUBTITLE, TERMS, TITLE } from './constants';
import { form } from './utils';
const PersonalData = ({ initialValues }) => {
  const [searchParams] = useSearchParams();
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
    const [fullName, cpf] = [searchParams.get('name'), searchParams.get('cpf')];

    if (!isDataValid([fullName, cpf])) return;

    setStepData({ fullName, cpf });
  }, []);

  useEffect(() => {
    setStepError(formik.errors);
  }, [formik.errors]);

  const defaultInput = () => (
    <Input
      size={FIELD_SIZE}
      data-cy="fullName"
      {...configFormikInput('fullName', formik, { customChange: handleInputChange(formik) })}
    />
  );
  const maskedInput = () => (
    <Input
      size={FIELD_SIZE}
      data-cy="cpf"
      {...configFormikInput('cpf', formik, { customChange: handleInputChange(formik) })}
      mask={MASKS.cpf}
    />
  );

  return (
    <PageTemplate title={TITLE} subtitle={SUBTITLE}>
      <>
        <TextField
          {...defineErrors('fullName', formik)}
          textLabel="Qual seu nome completo?"
          renderInput={defaultInput}
          size={FIELD_SIZE}
          helperTextSize={HELPER_TEXT_SIZE}
        />
        <TextField
          textLabel="Qual seu CPF?"
          renderInput={maskedInput}
          {...defineErrors('cpf', formik)}
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
